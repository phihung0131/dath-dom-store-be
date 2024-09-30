const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Định nghĩa cấu hình cho Swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Documentation for 'Dom Store Project'",
      version: "1.0.0",
      description:
        "This is the API documentation for 'Dom Store Project' application",
    },
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: "apiKey",
          in: "header",
          name: "Authorization",
        },
      },
    },
    security: [
      {
        ApiKeyAuth: [],
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

// Tạo swagger specs
const swaggerSpec = swaggerJsdoc(options);

const setupSwaggerDocs = (app, port) => {
  // Thiết lập đường dẫn để xem tài liệu Swagger
  app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  console.log(`Swagger docs available at http://localhost:${port}/`);
};

module.exports = setupSwaggerDocs;
