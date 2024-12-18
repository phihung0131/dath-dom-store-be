const { Product } = require("../models/Product");
const { Category } = require("../models/Category");

// Dữ liệu mẫu cho sản phẩm
const products = [
  {
    name: "Giày Adizero Takumi Sen 10",
    description:
      "ĐÔI GIÀY CHẠY BỘ DÀNH CHO NGÀY THI ĐẤU ĐỂ CHINH PHỤC 10K ĐẦY TỐC ĐỘ.",
    price: 5000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b698e5b811a440ef91f2b1bfd3055994_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4c49f13ed851404baecf6f3051df0608_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6eed2b02f140486086ad37dcedda914c_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM3_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/379d333e0b7343b09e554548a914721d_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM3.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/64272c88ecb14b0fa5d52f37814357a1_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM4.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1b133ba3cafe4201bd41abfe3e85aee2_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM4.jpg",
    ],
    totalRate: 4.5,
    infos: [
      { color: "Black", size: 42, quantity: 100 },
      { color: "White", size: 40, quantity: 100 },
      { color: "Pink", size: 50, quantity: 20 },
      { color: "White", size: 34, quantity: 45 },
      { color: "Black", size: 46, quantity: 11 },
    ],
  },
  {
    name: "Giày Ultraboost 21",
    description:
      "Đôi giày chạy bộ với công nghệ đệm Boost mang lại sự thoải mái tối đa.",
    price: 4500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p_9366/Giay_Ultraboost_21_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q_9366/Giay_Ultraboost_21_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r_9366/Giay_Ultraboost_21_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "White", size: 40, quantity: 75 },
      { color: "Blue", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày NMD_R1",
    description:
      "Đôi giày phong cách với thiết kế hiện đại và công nghệ đệm Boost.",
    price: 4000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s_9366/Giay_NMD_R1_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t_9366/Giay_NMD_R1_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u_9366/Giay_NMD_R1_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Red", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Yeezy Boost 350 V2",
    description:
      "Đôi giày thời trang với thiết kế độc đáo và công nghệ đệm Boost.",
    price: 6000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v_9366/Giay_Yeezy_Boost_350_V2_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w_9366/Giay_Yeezy_Boost_350_V2_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x_9366/Giay_Yeezy_Boost_350_V2_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.8,
    infos: [
      { color: "Black", size: 42, quantity: 40 },
      { color: "White", size: 40, quantity: 60 },
      { color: "Gray", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Stan Smith",
    description: "Đôi giày cổ điển với thiết kế đơn giản và phong cách.",
    price: 3000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y_9366/Giay_Stan_Smith_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z_9366/Giay_Stan_Smith_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a_9366/Giay_Stan_Smith_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.4,
    infos: [
      { color: "White", size: 42, quantity: 70 },
      { color: "Green", size: 40, quantity: 50 },
      { color: "Gray", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Superstar",
    description: "Đôi giày biểu tượng với thiết kế vỏ sò đặc trưng.",
    price: 3200000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b_9366/Giay_Superstar_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c_9366/Giay_Superstar_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d_9366/Giay_Superstar_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.5,
    infos: [
      { color: "White", size: 42, quantity: 80 },
      { color: "Black", size: 40, quantity: 60 },
      { color: "Gold", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Alphabounce",
    description: "Đôi giày chạy bộ với thiết kế linh hoạt và đệm Bounce.",
    price: 3500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e_9366/Giay_Alphabounce_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f_9366/Giay_Alphabounce_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g_9366/Giay_Alphabounce_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Gray", size: 42, quantity: 70 },
      { color: "Blue", size: 40, quantity: 50 },
      { color: "Red", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày Solarboost",
    description:
      "Đôi giày chạy bộ với công nghệ đệm Boost và thiết kế thoáng khí.",
    price: 4200000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g4h_9366/Giay_Solarboost_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0t1u2v3w4x5y6z7a8b9c0d1e2f3g4h5i_9366/Giay_Solarboost_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1u2v3w4x5y6z7a8b9c0d1e2f3g4h5i6j_9366/Giay_Solarboost_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Green", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Pureboost",
    description: "Đôi giày chạy bộ với thiết kế tối giản và đệm Boost.",
    price: 3800000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2v3w4x5y6z7a8b9c0d1e2f3g4h5i6j7k_9366/Giay_Pureboost_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3w4x5y6z7a8b9c0d1e2f3g4h5i6j7k8l_9366/Giay_Pureboost_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4x5y6z7a8b9c0d1e2f3g4h5i6j7k8l9m_9366/Giay_Pureboost_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.5,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "White", size: 40, quantity: 75 },
      { color: "Yellow", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày X9000L4",
    description: "Đôi giày chạy bộ với thiết kế hiện đại và đệm Boost.",
    price: 3700000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t_9366/Giay_X9000L4_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u_9366/Giay_X9000L4_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v_9366/Giay_X9000L4_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Blue", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Terrex Agravic",
    description: "Đôi giày chạy địa hình với thiết kế bền bỉ và đệm Boost.",
    price: 4800000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w_9366/Giay_Terrex_Agravic_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x_9366/Giay_Terrex_Agravic_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y_9366/Giay_Terrex_Agravic_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "Green", size: 40, quantity: 75 },
      { color: "Orange", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày Adizero Boston 10",
    description: "Đôi giày chạy bộ với thiết kế nhẹ và đệm Lightstrike.",
    price: 4500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z_9366/Giay_Adizero_Boston_10_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a_9366/Giay_Adizero_Boston_10_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b_9366/Giay_Adizero_Boston_10_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Red", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Adizero Prime X",
    description:
      "Đôi giày chạy bộ với thiết kế tiên tiến và đệm Lightstrike Pro.",
    price: 5500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c_9366/Giay_Adizero_Prime_X_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d_9366/Giay_Adizero_Prime_X_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e_9366/Giay_Adizero_Prime_X_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.8,
    infos: [
      { color: "Black", size: 42, quantity: 40 },
      { color: "White", size: 40, quantity: 60 },
      { color: "Blue", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Adizero Adios Pro 2",
    description: "Đôi giày chạy bộ với thiết kế nhẹ và đệm Lightstrike Pro.",
    price: 5200000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f_9366/Giay_Adizero_Adios_Pro_2_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g_9366/Giay_Adizero_Adios_Pro_2_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h_9366/Giay_Adizero_Adios_Pro_2_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "White", size: 40, quantity: 75 },
      { color: "Green", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày Adizero Takumi Sen 10",
    description:
      "ĐÔI GIÀY CHẠY BỘ DÀNH CHO NGÀY THI ĐẤU ĐỂ CHINH PHỤC 10K ĐẦY TỐC ĐỘ.",
    price: 5000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b698e5b811a440ef91f2b1bfd3055994_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4c49f13ed851404baecf6f3051df0608_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6eed2b02f140486086ad37dcedda914c_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM3_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/379d333e0b7343b09e554548a914721d_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM3.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/64272c88ecb14b0fa5d52f37814357a1_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM4.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1b133ba3cafe4201bd41abfe3e85aee2_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM4.jpg",
    ],
    totalRate: 4.5,
    infos: [
      { color: "Black", size: 42, quantity: 100 },
      { color: "White", size: 40, quantity: 100 },
      { color: "Pink", size: 50, quantity: 20 },
      { color: "White", size: 34, quantity: 45 },
      { color: "Black", size: 46, quantity: 11 },
    ],
  },
  {
    name: "Giày Ultraboost 21",
    description:
      "Đôi giày chạy bộ với công nghệ đệm Boost mang lại sự thoải mái tối đa.",
    price: 4500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p_9366/Giay_Ultraboost_21_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q_9366/Giay_Ultraboost_21_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r_9366/Giay_Ultraboost_21_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "White", size: 40, quantity: 75 },
      { color: "Blue", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày NMD_R1",
    description:
      "Đôi giày phong cách với thiết kế hiện đại và công nghệ đệm Boost.",
    price: 4000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s_9366/Giay_NMD_R1_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t_9366/Giay_NMD_R1_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u_9366/Giay_NMD_R1_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Red", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Yeezy Boost 350 V2",
    description:
      "Đôi giày thời trang với thiết kế độc đáo và công nghệ đệm Boost.",
    price: 6000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v_9366/Giay_Yeezy_Boost_350_V2_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w_9366/Giay_Yeezy_Boost_350_V2_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x_9366/Giay_Yeezy_Boost_350_V2_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.8,
    infos: [
      { color: "Black", size: 42, quantity: 40 },
      { color: "White", size: 40, quantity: 60 },
      { color: "Gray", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Stan Smith",
    description: "Đôi giày cổ điển với thiết kế đơn giản và phong cách.",
    price: 3000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y_9366/Giay_Stan_Smith_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z_9366/Giay_Stan_Smith_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a_9366/Giay_Stan_Smith_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.4,
    infos: [
      { color: "White", size: 42, quantity: 70 },
      { color: "Green", size: 40, quantity: 50 },
      { color: "Gray", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Superstar",
    description: "Đôi giày biểu tượng với thiết kế vỏ sò đặc trưng.",
    price: 3200000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b_9366/Giay_Superstar_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c_9366/Giay_Superstar_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d_9366/Giay_Superstar_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.5,
    infos: [
      { color: "White", size: 42, quantity: 80 },
      { color: "Black", size: 40, quantity: 60 },
      { color: "Gold", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Alphabounce",
    description: "Đôi giày chạy bộ với thiết kế linh hoạt và đệm Bounce.",
    price: 3500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e_9366/Giay_Alphabounce_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f_9366/Giay_Alphabounce_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g_9366/Giay_Alphabounce_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Gray", size: 42, quantity: 70 },
      { color: "Blue", size: 40, quantity: 50 },
      { color: "Red", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày Solarboost",
    description:
      "Đôi giày chạy bộ với công nghệ đệm Boost và thiết kế thoáng khí.",
    price: 4200000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g4h_9366/Giay_Solarboost_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0t1u2v3w4x5y6z7a8b9c0d1e2f3g4h5i_9366/Giay_Solarboost_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1u2v3w4x5y6z7a8b9c0d1e2f3g4h5i6j_9366/Giay_Solarboost_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Green", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Pureboost",
    description: "Đôi giày chạy bộ với thiết kế tối giản và đệm Boost.",
    price: 3800000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2v3w4x5y6z7a8b9c0d1e2f3g4h5i6j7k_9366/Giay_Pureboost_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3w4x5y6z7a8b9c0d1e2f3g4h5i6j7k8l_9366/Giay_Pureboost_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4x5y6z7a8b9c0d1e2f3g4h5i6j7k8l9m_9366/Giay_Pureboost_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.5,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "White", size: 40, quantity: 75 },
      { color: "Yellow", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày X9000L4",
    description: "Đôi giày chạy bộ với thiết kế hiện đại và đệm Boost.",
    price: 3700000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t_9366/Giay_X9000L4_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u_9366/Giay_X9000L4_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v_9366/Giay_X9000L4_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Blue", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Terrex Agravic",
    description: "Đôi giày chạy địa hình với thiết kế bền bỉ và đệm Boost.",
    price: 4800000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w_9366/Giay_Terrex_Agravic_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x_9366/Giay_Terrex_Agravic_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y_9366/Giay_Terrex_Agravic_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "Green", size: 40, quantity: 75 },
      { color: "Orange", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày Adizero Boston 10",
    description: "Đôi giày chạy bộ với thiết kế nhẹ và đệm Lightstrike.",
    price: 4500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z_9366/Giay_Adizero_Boston_10_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a_9366/Giay_Adizero_Boston_10_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b_9366/Giay_Adizero_Boston_10_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Red", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Adizero Prime X",
    description:
      "Đôi giày chạy bộ với thiết kế tiên tiến và đệm Lightstrike Pro.",
    price: 5500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c_9366/Giay_Adizero_Prime_X_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d_9366/Giay_Adizero_Prime_X_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e_9366/Giay_Adizero_Prime_X_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.8,
    infos: [
      { color: "Black", size: 42, quantity: 40 },
      { color: "White", size: 40, quantity: 60 },
      { color: "Blue", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Adizero Adios Pro 2",
    description: "Đôi giày chạy bộ với thiết kế nhẹ và đệm Lightstrike Pro.",
    price: 5200000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f_9366/Giay_Adizero_Adios_Pro_2_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g_9366/Giay_Adizero_Adios_Pro_2_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h_9366/Giay_Adizero_Adios_Pro_2_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "White", size: 40, quantity: 75 },
      { color: "Green", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày Adizero Takumi Sen 10",
    description:
      "ĐÔI GIÀY CHẠY BỘ DÀNH CHO NGÀY THI ĐẤU ĐỂ CHINH PHỤC 10K ĐẦY TỐC ĐỘ.",
    price: 5000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b698e5b811a440ef91f2b1bfd3055994_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4c49f13ed851404baecf6f3051df0608_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6eed2b02f140486086ad37dcedda914c_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM3_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/379d333e0b7343b09e554548a914721d_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM3.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/64272c88ecb14b0fa5d52f37814357a1_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM4.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1b133ba3cafe4201bd41abfe3e85aee2_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM4.jpg",
    ],
    totalRate: 4.5,
    infos: [
      { color: "Black", size: 42, quantity: 100 },
      { color: "White", size: 40, quantity: 100 },
      { color: "Pink", size: 50, quantity: 20 },
      { color: "White", size: 34, quantity: 45 },
      { color: "Black", size: 46, quantity: 11 },
    ],
  },
  {
    name: "Giày Ultraboost 21",
    description:
      "Đôi giày chạy bộ với công nghệ đệm Boost mang lại sự thoải mái tối đa.",
    price: 4500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p_9366/Giay_Ultraboost_21_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q_9366/Giay_Ultraboost_21_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r_9366/Giay_Ultraboost_21_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "White", size: 40, quantity: 75 },
      { color: "Blue", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày NMD_R1",
    description:
      "Đôi giày phong cách với thiết kế hiện đại và công nghệ đệm Boost.",
    price: 4000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s_9366/Giay_NMD_R1_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t_9366/Giay_NMD_R1_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u_9366/Giay_NMD_R1_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Red", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Yeezy Boost 350 V2",
    description:
      "Đôi giày thời trang với thiết kế độc đáo và công nghệ đệm Boost.",
    price: 6000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v_9366/Giay_Yeezy_Boost_350_V2_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w_9366/Giay_Yeezy_Boost_350_V2_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x_9366/Giay_Yeezy_Boost_350_V2_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.8,
    infos: [
      { color: "Black", size: 42, quantity: 40 },
      { color: "White", size: 40, quantity: 60 },
      { color: "Gray", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Stan Smith",
    description: "Đôi giày cổ điển với thiết kế đơn giản và phong cách.",
    price: 3000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y_9366/Giay_Stan_Smith_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z_9366/Giay_Stan_Smith_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a_9366/Giay_Stan_Smith_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.4,
    infos: [
      { color: "White", size: 42, quantity: 70 },
      { color: "Green", size: 40, quantity: 50 },
      { color: "Gray", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Superstar",
    description: "Đôi giày biểu tượng với thiết kế vỏ sò đặc trưng.",
    price: 3200000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b_9366/Giay_Superstar_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c_9366/Giay_Superstar_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d_9366/Giay_Superstar_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.5,
    infos: [
      { color: "White", size: 42, quantity: 80 },
      { color: "Black", size: 40, quantity: 60 },
      { color: "Gold", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Alphabounce",
    description: "Đôi giày chạy bộ với thiết kế linh hoạt và đệm Bounce.",
    price: 3500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e_9366/Giay_Alphabounce_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f_9366/Giay_Alphabounce_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g_9366/Giay_Alphabounce_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Gray", size: 42, quantity: 70 },
      { color: "Blue", size: 40, quantity: 50 },
      { color: "Red", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày Solarboost",
    description:
      "Đôi giày chạy bộ với công nghệ đệm Boost và thiết kế thoáng khí.",
    price: 4200000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g4h_9366/Giay_Solarboost_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0t1u2v3w4x5y6z7a8b9c0d1e2f3g4h5i_9366/Giay_Solarboost_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1u2v3w4x5y6z7a8b9c0d1e2f3g4h5i6j_9366/Giay_Solarboost_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Green", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Pureboost",
    description: "Đôi giày chạy bộ với thiết kế tối giản và đệm Boost.",
    price: 3800000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2v3w4x5y6z7a8b9c0d1e2f3g4h5i6j7k_9366/Giay_Pureboost_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3w4x5y6z7a8b9c0d1e2f3g4h5i6j7k8l_9366/Giay_Pureboost_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4x5y6z7a8b9c0d1e2f3g4h5i6j7k8l9m_9366/Giay_Pureboost_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.5,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "White", size: 40, quantity: 75 },
      { color: "Yellow", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày X9000L4",
    description: "Đôi giày chạy bộ với thiết kế hiện đại và đệm Boost.",
    price: 3700000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t_9366/Giay_X9000L4_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u_9366/Giay_X9000L4_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v_9366/Giay_X9000L4_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Blue", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Terrex Agravic",
    description: "Đôi giày chạy địa hình với thiết kế bền bỉ và đệm Boost.",
    price: 4800000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w_9366/Giay_Terrex_Agravic_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x_9366/Giay_Terrex_Agravic_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y_9366/Giay_Terrex_Agravic_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "Green", size: 40, quantity: 75 },
      { color: "Orange", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày Adizero Boston 10",
    description: "Đôi giày chạy bộ với thiết kế nhẹ và đệm Lightstrike.",
    price: 4500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z_9366/Giay_Adizero_Boston_10_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a_9366/Giay_Adizero_Boston_10_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b_9366/Giay_Adizero_Boston_10_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Red", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Adizero Prime X",
    description:
      "Đôi giày chạy bộ với thiết kế tiên tiến và đệm Lightstrike Pro.",
    price: 5500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c_9366/Giay_Adizero_Prime_X_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d_9366/Giay_Adizero_Prime_X_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e_9366/Giay_Adizero_Prime_X_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.8,
    infos: [
      { color: "Black", size: 42, quantity: 40 },
      { color: "White", size: 40, quantity: 60 },
      { color: "Blue", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Adizero Adios Pro 2",
    description: "Đôi giày chạy bộ với thiết kế nhẹ và đệm Lightstrike Pro.",
    price: 5200000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f_9366/Giay_Adizero_Adios_Pro_2_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g_9366/Giay_Adizero_Adios_Pro_2_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h_9366/Giay_Adizero_Adios_Pro_2_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "White", size: 40, quantity: 75 },
      { color: "Green", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày Adizero Takumi Sen 10",
    description:
      "ĐÔI GIÀY CHẠY BỘ DÀNH CHO NGÀY THI ĐẤU ĐỂ CHINH PHỤC 10K ĐẦY TỐC ĐỘ.",
    price: 5000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b698e5b811a440ef91f2b1bfd3055994_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4c49f13ed851404baecf6f3051df0608_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6eed2b02f140486086ad37dcedda914c_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM3_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/379d333e0b7343b09e554548a914721d_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM3.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/64272c88ecb14b0fa5d52f37814357a1_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM4.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1b133ba3cafe4201bd41abfe3e85aee2_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM4.jpg",
    ],
    totalRate: 4.5,
    infos: [
      { color: "Black", size: 42, quantity: 100 },
      { color: "White", size: 40, quantity: 100 },
      { color: "Pink", size: 50, quantity: 20 },
      { color: "White", size: 34, quantity: 45 },
      { color: "Black", size: 46, quantity: 11 },
    ],
  },
  {
    name: "Giày Ultraboost 21",
    description:
      "Đôi giày chạy bộ với công nghệ đệm Boost mang lại sự thoải mái tối đa.",
    price: 4500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p_9366/Giay_Ultraboost_21_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q_9366/Giay_Ultraboost_21_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r_9366/Giay_Ultraboost_21_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "White", size: 40, quantity: 75 },
      { color: "Blue", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày NMD_R1",
    description:
      "Đôi giày phong cách với thiết kế hiện đại và công nghệ đệm Boost.",
    price: 4000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s_9366/Giay_NMD_R1_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t_9366/Giay_NMD_R1_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u_9366/Giay_NMD_R1_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Red", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Yeezy Boost 350 V2",
    description:
      "Đôi giày thời trang với thiết kế độc đáo và công nghệ đệm Boost.",
    price: 6000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v_9366/Giay_Yeezy_Boost_350_V2_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w_9366/Giay_Yeezy_Boost_350_V2_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x_9366/Giay_Yeezy_Boost_350_V2_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.8,
    infos: [
      { color: "Black", size: 42, quantity: 40 },
      { color: "White", size: 40, quantity: 60 },
      { color: "Gray", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Stan Smith",
    description: "Đôi giày cổ điển với thiết kế đơn giản và phong cách.",
    price: 3000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y_9366/Giay_Stan_Smith_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z_9366/Giay_Stan_Smith_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a_9366/Giay_Stan_Smith_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.4,
    infos: [
      { color: "White", size: 42, quantity: 70 },
      { color: "Green", size: 40, quantity: 50 },
      { color: "Gray", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Superstar",
    description: "Đôi giày biểu tượng với thiết kế vỏ sò đặc trưng.",
    price: 3200000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b_9366/Giay_Superstar_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c_9366/Giay_Superstar_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d_9366/Giay_Superstar_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.5,
    infos: [
      { color: "White", size: 42, quantity: 80 },
      { color: "Black", size: 40, quantity: 60 },
      { color: "Gold", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Alphabounce",
    description: "Đôi giày chạy bộ với thiết kế linh hoạt và đệm Bounce.",
    price: 3500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e_9366/Giay_Alphabounce_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f_9366/Giay_Alphabounce_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g_9366/Giay_Alphabounce_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Gray", size: 42, quantity: 70 },
      { color: "Blue", size: 40, quantity: 50 },
      { color: "Red", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày Solarboost",
    description:
      "Đôi giày chạy bộ với công nghệ đệm Boost và thiết kế thoáng khí.",
    price: 4200000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g4h_9366/Giay_Solarboost_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0t1u2v3w4x5y6z7a8b9c0d1e2f3g4h5i_9366/Giay_Solarboost_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1u2v3w4x5y6z7a8b9c0d1e2f3g4h5i6j_9366/Giay_Solarboost_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Green", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Pureboost",
    description: "Đôi giày chạy bộ với thiết kế tối giản và đệm Boost.",
    price: 3800000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2v3w4x5y6z7a8b9c0d1e2f3g4h5i6j7k_9366/Giay_Pureboost_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3w4x5y6z7a8b9c0d1e2f3g4h5i6j7k8l_9366/Giay_Pureboost_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4x5y6z7a8b9c0d1e2f3g4h5i6j7k8l9m_9366/Giay_Pureboost_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.5,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "White", size: 40, quantity: 75 },
      { color: "Yellow", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày X9000L4",
    description: "Đôi giày chạy bộ với thiết kế hiện đại và đệm Boost.",
    price: 3700000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t_9366/Giay_X9000L4_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u_9366/Giay_X9000L4_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v_9366/Giay_X9000L4_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Blue", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Terrex Agravic",
    description: "Đôi giày chạy địa hình với thiết kế bền bỉ và đệm Boost.",
    price: 4800000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w_9366/Giay_Terrex_Agravic_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x_9366/Giay_Terrex_Agravic_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y_9366/Giay_Terrex_Agravic_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "Green", size: 40, quantity: 75 },
      { color: "Orange", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày Adizero Boston 10",
    description: "Đôi giày chạy bộ với thiết kế nhẹ và đệm Lightstrike.",
    price: 4500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z_9366/Giay_Adizero_Boston_10_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a_9366/Giay_Adizero_Boston_10_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b_9366/Giay_Adizero_Boston_10_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Red", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Adizero Prime X",
    description:
      "Đôi giày chạy bộ với thiết kế tiên tiến và đệm Lightstrike Pro.",
    price: 5500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c_9366/Giay_Adizero_Prime_X_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d_9366/Giay_Adizero_Prime_X_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e_9366/Giay_Adizero_Prime_X_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.8,
    infos: [
      { color: "Black", size: 42, quantity: 40 },
      { color: "White", size: 40, quantity: 60 },
      { color: "Blue", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Adizero Adios Pro 2",
    description: "Đôi giày chạy bộ với thiết kế nhẹ và đệm Lightstrike Pro.",
    price: 5200000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f_9366/Giay_Adizero_Adios_Pro_2_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g_9366/Giay_Adizero_Adios_Pro_2_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h_9366/Giay_Adizero_Adios_Pro_2_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "White", size: 40, quantity: 75 },
      { color: "Green", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày Adizero Takumi Sen 10",
    description:
      "ĐÔI GIÀY CHẠY BỘ DÀNH CHO NGÀY THI ĐẤU ĐỂ CHINH PHỤC 10K ĐẦY TỐC ĐỘ.",
    price: 5000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b698e5b811a440ef91f2b1bfd3055994_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4c49f13ed851404baecf6f3051df0608_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6eed2b02f140486086ad37dcedda914c_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM3_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/379d333e0b7343b09e554548a914721d_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM3.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/64272c88ecb14b0fa5d52f37814357a1_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM4.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1b133ba3cafe4201bd41abfe3e85aee2_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM4.jpg",
    ],
    totalRate: 4.5,
    infos: [
      { color: "Black", size: 42, quantity: 100 },
      { color: "White", size: 40, quantity: 100 },
      { color: "Pink", size: 50, quantity: 20 },
      { color: "White", size: 34, quantity: 45 },
      { color: "Black", size: 46, quantity: 11 },
    ],
  },
  {
    name: "Giày Ultraboost 21",
    description:
      "Đôi giày chạy bộ với công nghệ đệm Boost mang lại sự thoải mái tối đa.",
    price: 4500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p_9366/Giay_Ultraboost_21_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q_9366/Giay_Ultraboost_21_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r_9366/Giay_Ultraboost_21_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "White", size: 40, quantity: 75 },
      { color: "Blue", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày NMD_R1",
    description:
      "Đôi giày phong cách với thiết kế hiện đại và công nghệ đệm Boost.",
    price: 4000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s_9366/Giay_NMD_R1_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t_9366/Giay_NMD_R1_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u_9366/Giay_NMD_R1_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Red", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Yeezy Boost 350 V2",
    description:
      "Đôi giày thời trang với thiết kế độc đáo và công nghệ đệm Boost.",
    price: 6000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v_9366/Giay_Yeezy_Boost_350_V2_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w_9366/Giay_Yeezy_Boost_350_V2_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x_9366/Giay_Yeezy_Boost_350_V2_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.8,
    infos: [
      { color: "Black", size: 42, quantity: 40 },
      { color: "White", size: 40, quantity: 60 },
      { color: "Gray", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Stan Smith",
    description: "Đôi giày cổ điển với thiết kế đơn giản và phong cách.",
    price: 3000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y_9366/Giay_Stan_Smith_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z_9366/Giay_Stan_Smith_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a_9366/Giay_Stan_Smith_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.4,
    infos: [
      { color: "White", size: 42, quantity: 70 },
      { color: "Green", size: 40, quantity: 50 },
      { color: "Gray", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Superstar",
    description: "Đôi giày biểu tượng với thiết kế vỏ sò đặc trưng.",
    price: 3200000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b_9366/Giay_Superstar_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c_9366/Giay_Superstar_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d_9366/Giay_Superstar_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.5,
    infos: [
      { color: "White", size: 42, quantity: 80 },
      { color: "Black", size: 40, quantity: 60 },
      { color: "Gold", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Alphabounce",
    description: "Đôi giày chạy bộ với thiết kế linh hoạt và đệm Bounce.",
    price: 3500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e_9366/Giay_Alphabounce_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f_9366/Giay_Alphabounce_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g_9366/Giay_Alphabounce_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Gray", size: 42, quantity: 70 },
      { color: "Blue", size: 40, quantity: 50 },
      { color: "Red", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày Solarboost",
    description:
      "Đôi giày chạy bộ với công nghệ đệm Boost và thiết kế thoáng khí.",
    price: 4200000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g4h_9366/Giay_Solarboost_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0t1u2v3w4x5y6z7a8b9c0d1e2f3g4h5i_9366/Giay_Solarboost_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1u2v3w4x5y6z7a8b9c0d1e2f3g4h5i6j_9366/Giay_Solarboost_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Green", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Pureboost",
    description: "Đôi giày chạy bộ với thiết kế tối giản và đệm Boost.",
    price: 3800000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2v3w4x5y6z7a8b9c0d1e2f3g4h5i6j7k_9366/Giay_Pureboost_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3w4x5y6z7a8b9c0d1e2f3g4h5i6j7k8l_9366/Giay_Pureboost_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4x5y6z7a8b9c0d1e2f3g4h5i6j7k8l9m_9366/Giay_Pureboost_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.5,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "White", size: 40, quantity: 75 },
      { color: "Yellow", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày X9000L4",
    description: "Đôi giày chạy bộ với thiết kế hiện đại và đệm Boost.",
    price: 3700000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t_9366/Giay_X9000L4_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u_9366/Giay_X9000L4_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v_9366/Giay_X9000L4_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Blue", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Terrex Agravic",
    description: "Đôi giày chạy địa hình với thiết kế bền bỉ và đệm Boost.",
    price: 4800000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w_9366/Giay_Terrex_Agravic_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x_9366/Giay_Terrex_Agravic_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y_9366/Giay_Terrex_Agravic_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "Green", size: 40, quantity: 75 },
      { color: "Orange", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày Adizero Boston 10",
    description: "Đôi giày chạy bộ với thiết kế nhẹ và đệm Lightstrike.",
    price: 4500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z_9366/Giay_Adizero_Boston_10_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a_9366/Giay_Adizero_Boston_10_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b_9366/Giay_Adizero_Boston_10_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Red", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Adizero Prime X",
    description:
      "Đôi giày chạy bộ với thiết kế tiên tiến và đệm Lightstrike Pro.",
    price: 5500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c_9366/Giay_Adizero_Prime_X_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d_9366/Giay_Adizero_Prime_X_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e_9366/Giay_Adizero_Prime_X_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.8,
    infos: [
      { color: "Black", size: 42, quantity: 40 },
      { color: "White", size: 40, quantity: 60 },
      { color: "Blue", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Adizero Adios Pro 2",
    description: "Đôi giày chạy bộ với thiết kế nhẹ và đệm Lightstrike Pro.",
    price: 5200000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f_9366/Giay_Adizero_Adios_Pro_2_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g_9366/Giay_Adizero_Adios_Pro_2_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h_9366/Giay_Adizero_Adios_Pro_2_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "White", size: 40, quantity: 75 },
      { color: "Green", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày Adizero Takumi Sen 10",
    description:
      "ĐÔI GIÀY CHẠY BỘ DÀNH CHO NGÀY THI ĐẤU ĐỂ CHINH PHỤC 10K ĐẦY TỐC ĐỘ.",
    price: 5000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b698e5b811a440ef91f2b1bfd3055994_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4c49f13ed851404baecf6f3051df0608_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6eed2b02f140486086ad37dcedda914c_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM3_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/379d333e0b7343b09e554548a914721d_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM3.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/64272c88ecb14b0fa5d52f37814357a1_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM4.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1b133ba3cafe4201bd41abfe3e85aee2_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM4.jpg",
    ],
    totalRate: 4.5,
    infos: [
      { color: "Black", size: 42, quantity: 100 },
      { color: "White", size: 40, quantity: 100 },
      { color: "Pink", size: 50, quantity: 20 },
      { color: "White", size: 34, quantity: 45 },
      { color: "Black", size: 46, quantity: 11 },
    ],
  },
  {
    name: "Giày Ultraboost 21",
    description:
      "Đôi giày chạy bộ với công nghệ đệm Boost mang lại sự thoải mái tối đa.",
    price: 4500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p_9366/Giay_Ultraboost_21_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q_9366/Giay_Ultraboost_21_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r_9366/Giay_Ultraboost_21_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "White", size: 40, quantity: 75 },
      { color: "Blue", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày NMD_R1",
    description:
      "Đôi giày phong cách với thiết kế hiện đại và công nghệ đệm Boost.",
    price: 4000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s_9366/Giay_NMD_R1_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t_9366/Giay_NMD_R1_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u_9366/Giay_NMD_R1_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Red", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Yeezy Boost 350 V2",
    description:
      "Đôi giày thời trang với thiết kế độc đáo và công nghệ đệm Boost.",
    price: 6000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v_9366/Giay_Yeezy_Boost_350_V2_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w_9366/Giay_Yeezy_Boost_350_V2_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x_9366/Giay_Yeezy_Boost_350_V2_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.8,
    infos: [
      { color: "Black", size: 42, quantity: 40 },
      { color: "White", size: 40, quantity: 60 },
      { color: "Gray", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Stan Smith",
    description: "Đôi giày cổ điển với thiết kế đơn giản và phong cách.",
    price: 3000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y_9366/Giay_Stan_Smith_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z_9366/Giay_Stan_Smith_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a_9366/Giay_Stan_Smith_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.4,
    infos: [
      { color: "White", size: 42, quantity: 70 },
      { color: "Green", size: 40, quantity: 50 },
      { color: "Gray", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Superstar",
    description: "Đôi giày biểu tượng với thiết kế vỏ sò đặc trưng.",
    price: 3200000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b_9366/Giay_Superstar_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c_9366/Giay_Superstar_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d_9366/Giay_Superstar_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.5,
    infos: [
      { color: "White", size: 42, quantity: 80 },
      { color: "Black", size: 40, quantity: 60 },
      { color: "Gold", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Alphabounce",
    description: "Đôi giày chạy bộ với thiết kế linh hoạt và đệm Bounce.",
    price: 3500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e_9366/Giay_Alphabounce_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f_9366/Giay_Alphabounce_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g_9366/Giay_Alphabounce_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Gray", size: 42, quantity: 70 },
      { color: "Blue", size: 40, quantity: 50 },
      { color: "Red", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày Solarboost",
    description:
      "Đôi giày chạy bộ với công nghệ đệm Boost và thiết kế thoáng khí.",
    price: 4200000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g4h_9366/Giay_Solarboost_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0t1u2v3w4x5y6z7a8b9c0d1e2f3g4h5i_9366/Giay_Solarboost_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1u2v3w4x5y6z7a8b9c0d1e2f3g4h5i6j_9366/Giay_Solarboost_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Green", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Pureboost",
    description: "Đôi giày chạy bộ với thiết kế tối giản và đệm Boost.",
    price: 3800000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2v3w4x5y6z7a8b9c0d1e2f3g4h5i6j7k_9366/Giay_Pureboost_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3w4x5y6z7a8b9c0d1e2f3g4h5i6j7k8l_9366/Giay_Pureboost_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4x5y6z7a8b9c0d1e2f3g4h5i6j7k8l9m_9366/Giay_Pureboost_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.5,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "White", size: 40, quantity: 75 },
      { color: "Yellow", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày X9000L4",
    description: "Đôi giày chạy bộ với thiết kế hiện đại và đệm Boost.",
    price: 3700000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t_9366/Giay_X9000L4_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u_9366/Giay_X9000L4_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v_9366/Giay_X9000L4_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Blue", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Terrex Agravic",
    description: "Đôi giày chạy địa hình với thiết kế bền bỉ và đệm Boost.",
    price: 4800000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w_9366/Giay_Terrex_Agravic_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x_9366/Giay_Terrex_Agravic_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y_9366/Giay_Terrex_Agravic_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "Green", size: 40, quantity: 75 },
      { color: "Orange", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày Adizero Boston 10",
    description: "Đôi giày chạy bộ với thiết kế nhẹ và đệm Lightstrike.",
    price: 4500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z_9366/Giay_Adizero_Boston_10_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a_9366/Giay_Adizero_Boston_10_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b_9366/Giay_Adizero_Boston_10_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Red", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Adizero Prime X",
    description:
      "Đôi giày chạy bộ với thiết kế tiên tiến và đệm Lightstrike Pro.",
    price: 5500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c_9366/Giay_Adizero_Prime_X_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d_9366/Giay_Adizero_Prime_X_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e_9366/Giay_Adizero_Prime_X_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.8,
    infos: [
      { color: "Black", size: 42, quantity: 40 },
      { color: "White", size: 40, quantity: 60 },
      { color: "Blue", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Adizero Adios Pro 2",
    description: "Đôi giày chạy bộ với thiết kế nhẹ và đệm Lightstrike Pro.",
    price: 5200000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f_9366/Giay_Adizero_Adios_Pro_2_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g_9366/Giay_Adizero_Adios_Pro_2_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h_9366/Giay_Adizero_Adios_Pro_2_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "White", size: 40, quantity: 75 },
      { color: "Green", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày Adizero Takumi Sen 10",
    description:
      "ĐÔI GIÀY CHẠY BỘ DÀNH CHO NGÀY THI ĐẤU ĐỂ CHINH PHỤC 10K ĐẦY TỐC ĐỘ.",
    price: 5000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b698e5b811a440ef91f2b1bfd3055994_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4c49f13ed851404baecf6f3051df0608_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6eed2b02f140486086ad37dcedda914c_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM3_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/379d333e0b7343b09e554548a914721d_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM3.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/64272c88ecb14b0fa5d52f37814357a1_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM4.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1b133ba3cafe4201bd41abfe3e85aee2_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM4.jpg",
    ],
    totalRate: 4.5,
    infos: [
      { color: "Black", size: 42, quantity: 100 },
      { color: "White", size: 40, quantity: 100 },
      { color: "Pink", size: 50, quantity: 20 },
      { color: "White", size: 34, quantity: 45 },
      { color: "Black", size: 46, quantity: 11 },
    ],
  },
  {
    name: "Giày Ultraboost 21",
    description:
      "Đôi giày chạy bộ với công nghệ đệm Boost mang lại sự thoải mái tối đa.",
    price: 4500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p_9366/Giay_Ultraboost_21_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q_9366/Giay_Ultraboost_21_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r_9366/Giay_Ultraboost_21_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "White", size: 40, quantity: 75 },
      { color: "Blue", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày NMD_R1",
    description:
      "Đôi giày phong cách với thiết kế hiện đại và công nghệ đệm Boost.",
    price: 4000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s_9366/Giay_NMD_R1_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t_9366/Giay_NMD_R1_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u_9366/Giay_NMD_R1_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Red", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Yeezy Boost 350 V2",
    description:
      "Đôi giày thời trang với thiết kế độc đáo và công nghệ đệm Boost.",
    price: 6000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v_9366/Giay_Yeezy_Boost_350_V2_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w_9366/Giay_Yeezy_Boost_350_V2_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x_9366/Giay_Yeezy_Boost_350_V2_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.8,
    infos: [
      { color: "Black", size: 42, quantity: 40 },
      { color: "White", size: 40, quantity: 60 },
      { color: "Gray", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Stan Smith",
    description: "Đôi giày cổ điển với thiết kế đơn giản và phong cách.",
    price: 3000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y_9366/Giay_Stan_Smith_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z_9366/Giay_Stan_Smith_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a_9366/Giay_Stan_Smith_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.4,
    infos: [
      { color: "White", size: 42, quantity: 70 },
      { color: "Green", size: 40, quantity: 50 },
      { color: "Gray", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Superstar",
    description: "Đôi giày biểu tượng với thiết kế vỏ sò đặc trưng.",
    price: 3200000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b_9366/Giay_Superstar_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c_9366/Giay_Superstar_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d_9366/Giay_Superstar_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.5,
    infos: [
      { color: "White", size: 42, quantity: 80 },
      { color: "Black", size: 40, quantity: 60 },
      { color: "Gold", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Alphabounce",
    description: "Đôi giày chạy bộ với thiết kế linh hoạt và đệm Bounce.",
    price: 3500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e_9366/Giay_Alphabounce_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f_9366/Giay_Alphabounce_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g_9366/Giay_Alphabounce_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Gray", size: 42, quantity: 70 },
      { color: "Blue", size: 40, quantity: 50 },
      { color: "Red", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày Solarboost",
    description:
      "Đôi giày chạy bộ với công nghệ đệm Boost và thiết kế thoáng khí.",
    price: 4200000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g4h_9366/Giay_Solarboost_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0t1u2v3w4x5y6z7a8b9c0d1e2f3g4h5i_9366/Giay_Solarboost_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1u2v3w4x5y6z7a8b9c0d1e2f3g4h5i6j_9366/Giay_Solarboost_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Green", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Pureboost",
    description: "Đôi giày chạy bộ với thiết kế tối giản và đệm Boost.",
    price: 3800000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2v3w4x5y6z7a8b9c0d1e2f3g4h5i6j7k_9366/Giay_Pureboost_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3w4x5y6z7a8b9c0d1e2f3g4h5i6j7k8l_9366/Giay_Pureboost_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4x5y6z7a8b9c0d1e2f3g4h5i6j7k8l9m_9366/Giay_Pureboost_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.5,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "White", size: 40, quantity: 75 },
      { color: "Yellow", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày X9000L4",
    description: "Đôi giày chạy bộ với thiết kế hiện đại và đệm Boost.",
    price: 3700000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t_9366/Giay_X9000L4_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u_9366/Giay_X9000L4_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v_9366/Giay_X9000L4_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Blue", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Terrex Agravic",
    description: "Đôi giày chạy địa hình với thiết kế bền bỉ và đệm Boost.",
    price: 4800000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w_9366/Giay_Terrex_Agravic_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x_9366/Giay_Terrex_Agravic_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y_9366/Giay_Terrex_Agravic_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "Green", size: 40, quantity: 75 },
      { color: "Orange", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày Adizero Boston 10",
    description: "Đôi giày chạy bộ với thiết kế nhẹ và đệm Lightstrike.",
    price: 4500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z_9366/Giay_Adizero_Boston_10_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a_9366/Giay_Adizero_Boston_10_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b_9366/Giay_Adizero_Boston_10_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Red", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Adizero Prime X",
    description:
      "Đôi giày chạy bộ với thiết kế tiên tiến và đệm Lightstrike Pro.",
    price: 5500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c_9366/Giay_Adizero_Prime_X_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d_9366/Giay_Adizero_Prime_X_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e_9366/Giay_Adizero_Prime_X_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.8,
    infos: [
      { color: "Black", size: 42, quantity: 40 },
      { color: "White", size: 40, quantity: 60 },
      { color: "Blue", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Adizero Adios Pro 2",
    description: "Đôi giày chạy bộ với thiết kế nhẹ và đệm Lightstrike Pro.",
    price: 5200000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f_9366/Giay_Adizero_Adios_Pro_2_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g_9366/Giay_Adizero_Adios_Pro_2_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h_9366/Giay_Adizero_Adios_Pro_2_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "White", size: 40, quantity: 75 },
      { color: "Green", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày Adizero Takumi Sen 10",
    description:
      "ĐÔI GIÀY CHẠY BỘ DÀNH CHO NGÀY THI ĐẤU ĐỂ CHINH PHỤC 10K ĐẦY TỐC ĐỘ.",
    price: 5000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b698e5b811a440ef91f2b1bfd3055994_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4c49f13ed851404baecf6f3051df0608_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6eed2b02f140486086ad37dcedda914c_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM3_hover.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/379d333e0b7343b09e554548a914721d_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM3.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/64272c88ecb14b0fa5d52f37814357a1_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM4.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1b133ba3cafe4201bd41abfe3e85aee2_9366/Giay_Adizero_Takumi_Sen_10_DJen_ID2793_HM4.jpg",
    ],
    totalRate: 4.5,
    infos: [
      { color: "Black", size: 42, quantity: 100 },
      { color: "White", size: 40, quantity: 100 },
      { color: "Pink", size: 50, quantity: 20 },
      { color: "White", size: 34, quantity: 45 },
      { color: "Black", size: 46, quantity: 11 },
    ],
  },
  {
    name: "Giày Ultraboost 21",
    description:
      "Đôi giày chạy bộ với công nghệ đệm Boost mang lại sự thoải mái tối đa.",
    price: 4500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p_9366/Giay_Ultraboost_21_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q_9366/Giay_Ultraboost_21_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r_9366/Giay_Ultraboost_21_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "White", size: 40, quantity: 75 },
      { color: "Blue", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày NMD_R1",
    description:
      "Đôi giày phong cách với thiết kế hiện đại và công nghệ đệm Boost.",
    price: 4000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s_9366/Giay_NMD_R1_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t_9366/Giay_NMD_R1_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u_9366/Giay_NMD_R1_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Red", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Yeezy Boost 350 V2",
    description:
      "Đôi giày thời trang với thiết kế độc đáo và công nghệ đệm Boost.",
    price: 6000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v_9366/Giay_Yeezy_Boost_350_V2_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w_9366/Giay_Yeezy_Boost_350_V2_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x_9366/Giay_Yeezy_Boost_350_V2_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.8,
    infos: [
      { color: "Black", size: 42, quantity: 40 },
      { color: "White", size: 40, quantity: 60 },
      { color: "Gray", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Stan Smith",
    description: "Đôi giày cổ điển với thiết kế đơn giản và phong cách.",
    price: 3000000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y_9366/Giay_Stan_Smith_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z_9366/Giay_Stan_Smith_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a_9366/Giay_Stan_Smith_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.4,
    infos: [
      { color: "White", size: 42, quantity: 70 },
      { color: "Green", size: 40, quantity: 50 },
      { color: "Gray", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Superstar",
    description: "Đôi giày biểu tượng với thiết kế vỏ sò đặc trưng.",
    price: 3200000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3m4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b_9366/Giay_Superstar_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4n5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c_9366/Giay_Superstar_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5o6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d_9366/Giay_Superstar_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.5,
    infos: [
      { color: "White", size: 42, quantity: 80 },
      { color: "Black", size: 40, quantity: 60 },
      { color: "Gold", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Alphabounce",
    description: "Đôi giày chạy bộ với thiết kế linh hoạt và đệm Bounce.",
    price: 3500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6p7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e_9366/Giay_Alphabounce_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7q8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f_9366/Giay_Alphabounce_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8r9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g_9366/Giay_Alphabounce_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Gray", size: 42, quantity: 70 },
      { color: "Blue", size: 40, quantity: 50 },
      { color: "Red", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày Solarboost",
    description:
      "Đôi giày chạy bộ với công nghệ đệm Boost và thiết kế thoáng khí.",
    price: 4200000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9s0t1u2v3w4x5y6z7a8b9c0d1e2f3g4h_9366/Giay_Solarboost_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0t1u2v3w4x5y6z7a8b9c0d1e2f3g4h5i_9366/Giay_Solarboost_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1u2v3w4x5y6z7a8b9c0d1e2f3g4h5i6j_9366/Giay_Solarboost_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Green", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Pureboost",
    description: "Đôi giày chạy bộ với thiết kế tối giản và đệm Boost.",
    price: 3800000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2v3w4x5y6z7a8b9c0d1e2f3g4h5i6j7k_9366/Giay_Pureboost_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3w4x5y6z7a8b9c0d1e2f3g4h5i6j7k8l_9366/Giay_Pureboost_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4x5y6z7a8b9c0d1e2f3g4h5i6j7k8l9m_9366/Giay_Pureboost_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.5,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "White", size: 40, quantity: 75 },
      { color: "Yellow", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày X9000L4",
    description: "Đôi giày chạy bộ với thiết kế hiện đại và đệm Boost.",
    price: 3700000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t_9366/Giay_X9000L4_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u_9366/Giay_X9000L4_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v_9366/Giay_X9000L4_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Blue", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Terrex Agravic",
    description: "Đôi giày chạy địa hình với thiết kế bền bỉ và đệm Boost.",
    price: 4800000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4h5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w_9366/Giay_Terrex_Agravic_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5i6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x_9366/Giay_Terrex_Agravic_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6j7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y_9366/Giay_Terrex_Agravic_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "Green", size: 40, quantity: 75 },
      { color: "Orange", size: 44, quantity: 30 },
    ],
  },
  {
    name: "Giày Adizero Boston 10",
    description: "Đôi giày chạy bộ với thiết kế nhẹ và đệm Lightstrike.",
    price: 4500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7k8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z_9366/Giay_Adizero_Boston_10_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8l9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a_9366/Giay_Adizero_Boston_10_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9m0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b_9366/Giay_Adizero_Boston_10_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.6,
    infos: [
      { color: "Black", size: 42, quantity: 60 },
      { color: "White", size: 40, quantity: 80 },
      { color: "Red", size: 44, quantity: 25 },
    ],
  },
  {
    name: "Giày Adizero Prime X",
    description:
      "Đôi giày chạy bộ với thiết kế tiên tiến và đệm Lightstrike Pro.",
    price: 5500000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0n1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c_9366/Giay_Adizero_Prime_X_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1o2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d_9366/Giay_Adizero_Prime_X_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2p3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e_9366/Giay_Adizero_Prime_X_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.8,
    infos: [
      { color: "Black", size: 42, quantity: 40 },
      { color: "White", size: 40, quantity: 60 },
      { color: "Blue", size: 44, quantity: 20 },
    ],
  },
  {
    name: "Giày Adizero Adios Pro 2",
    description: "Đôi giày chạy bộ với thiết kế nhẹ và đệm Lightstrike Pro.",
    price: 5200000,
    imageUrl: [
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3q4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f_9366/Giay_Adizero_Adios_Pro_2_DJen_ID2793_HM1.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4r5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g_9366/Giay_Adizero_Adios_Pro_2_DJen_ID2793_HM2.jpg",
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5s6t7u8v9w0x1y2z3a4b5c6d7e8f9g0h_9366/Giay_Adizero_Adios_Pro_2_DJen_ID2793_HM3.jpg",
    ],
    totalRate: 4.7,
    infos: [
      { color: "Black", size: 42, quantity: 50 },
      { color: "White", size: 40, quantity: 75 },
      { color: "Green", size: 44, quantity: 30 },
    ],
  },
  // Thêm nhiều sản phẩm khác nếu cần
];

// Hàm để gán Category ngẫu nhiên cho từng Product
const seedProducts = async (mongoose) => {
  try {
    // // Lấy tất cả các Category có trong database
    // const categories = await Category.find();
    // if (categories.length === 0) {
    //   console.log("No categories found. Please seed categories first.");
    //   return;
    // }

    // // Xóa tất cả sản phẩm hiện có
    // await Product.deleteMany();

    // // Duyệt qua các sản phẩm và gán Category ngẫu nhiên cho mỗi sản phẩm
    // const seededProducts = products.map((product) => {
    //   const randomCategory =
    //     categories[Math.floor(Math.random() * categories.length)];
    //   return {
    //     ...product,
    //     category: randomCategory._id, // Gắn _id của Category
    //   };
    // });

    // // Thêm sản phẩm mới vào database
    // const insertedProducts = await Product.insertMany(seededProducts);
    // console.log("Products seeded:", insertedProducts);
    // mongoose.connection.close(); // Đóng kết nối trong trường hợp xảy ra lỗi
    // Ensure the connection is established
    if (mongoose.connection.readyState !== 1) {
      console.log("Waiting for database connection...");
      await new Promise(resolve => mongoose.connection.once('connected', resolve));
    }

    console.log("Database connected, proceeding with seeding.");

    const newImageUrls = [
      'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5bbd6a3af12a4d7d8dc9c063ad1f67cf_9366/Giay_Bong_Ro_D.O.N_ISSUE_6_Like_Water_Mau_xanh_da_troi_IG9087_HM1.jpg',
      'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5b751b68084f4dd988ac872c46aa538c_9366/Giay_Bong_Ro_D.O.N_ISSUE_6_Like_Water_Mau_xanh_da_troi_IG9087_HM3_hover.jpg',
      'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c5cb2831f9694855a9e2fd67c40c3329_9366/Giay_Bong_Ro_D.O.N_ISSUE_6_Like_Water_Mau_xanh_da_troi_IG9087_HM4.jpg',
      'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a4ac0f1bf25484e8407512c9261d348_9366/Giay_Bong_Ro_D.O.N_ISSUE_6_Like_Water_Mau_xanh_da_troi_IG9087_HM5.jpg',
      'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8dd1ee0b3ab8407385a7105db2f9f581_9366/Giay_Bong_Ro_D.O.N_ISSUE_6_Like_Water_Mau_xanh_da_troi_IG9087_HM6.jpg'
    ];

    const result = await Product.updateMany(
      {}, // Empty filter to match all documents
      { $set: { imageUrl: newImageUrls } }
    );

    console.log(`Updated ${result.modifiedCount} products`);
  } catch (err) {
    console.log(err);
    // mongoose.connection.close(); // Đóng kết nối trong trường hợp xảy ra lỗi
  }
};

module.exports = { seedProducts };

// const mongoose = require("mongoose");

// async function seedProducts() {
//   try {
//     // Dynamically import the Product model
//     const Product = mongoose.model('Product');
    
//     if (!Product || typeof Product.updateMany !== 'function') {
//       throw new Error('Product model is not properly defined');
//     }

//     console.log("Product model successfully loaded.");

//     const newImageUrls = [
//       'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5bbd6a3af12a4d7d8dc9c063ad1f67cf_9366/Giay_Bong_Ro_D.O.N_ISSUE_6_Like_Water_Mau_xanh_da_troi_IG9087_HM1.jpg',
//       'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5b751b68084f4dd988ac872c46aa538c_9366/Giay_Bong_Ro_D.O.N_ISSUE_6_Like_Water_Mau_xanh_da_troi_IG9087_HM3_hover.jpg',
//       'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c5cb2831f9694855a9e2fd67c40c3329_9366/Giay_Bong_Ro_D.O.N_ISSUE_6_Like_Water_Mau_xanh_da_troi_IG9087_HM4.jpg',
//       'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a4ac0f1bf25484e8407512c9261d348_9366/Giay_Bong_Ro_D.O.N_ISSUE_6_Like_Water_Mau_xanh_da_troi_IG9087_HM5.jpg',
//       'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8dd1ee0b3ab8407385a7105db2f9f581_9366/Giay_Bong_Ro_D.O.N_ISSUE_6_Like_Water_Mau_xanh_da_troi_IG9087_HM6.jpg'
//     ];

//     const result = await Product.updateMany(
//       {}, // Empty filter to match all documents
//       { $set: { imageUrl: newImageUrls } }
//     );

//     console.log(`Updated ${result.modifiedCount} products`);
//   } catch (error) {
//     console.error('Error updating products:', error);
//   }
// }

// module.exports = { seedProducts };