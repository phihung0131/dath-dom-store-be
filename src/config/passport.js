const passport = require("passport");
require("dotenv").config();

const LocalStrategy = require("passport-local").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");
const bcrypt = require("bcryptjs");

async function findOrCreateUser(profile, provider) {
  let user = await User.findOne({ email: profile.emails[0].value });

  if (user) {
    // Kiểm tra xem tài khoản xã hội này đã được liên kết chưa
    const existingAccount = user.socialAccounts.find(
      (account) => account.provider === provider
    );
    if (!existingAccount) {
      user.socialAccounts.push({ provider, id: profile.id });
      await user.save();
    }
  } else {
    // Tạo người dùng mới
    user = new User({
      name:
        provider === "facebook"
          ? profile.name.givenName + " " + profile.name.familyName
          : profile.displayName,
      email: profile.emails[0].value,
      socialAccounts: [{ provider, id: profile.id }],
    });
    await user.save();
  }

  return user;
}

// Local Strategy
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return done(null, false, { message: "Incorrect email." });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return done(null, false, { message: "Incorrect password." });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  })
);

// Facebook Strategy
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      callbackURL: `http://${process.env.HOSTNAME}:${process.env.PORT}/api/v1/auth/facebook/callback`,
      profileFields: ["id", "emails", "name"],
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await findOrCreateUser(profile, "facebook");
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

// Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `http://${process.env.HOSTNAME}:${process.env.PORT}/api/v1/auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await findOrCreateUser(profile, "google");
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = passport;
