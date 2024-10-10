const sendResponse = require("../helper/sendResponse");
const Order = require("../models/Order");

function getDateRange(period) {
  const now = new Date();
  let startDate, endDate;

  switch (period) {
    case "day":
      startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      break;
    case "week":
      startDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - now.getDay()
      );
      endDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() - now.getDay() + 7
      );
      break;
    case "month":
      startDate = new Date(now.getFullYear(), now.getMonth(), 1);
      endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0);
      break;
    case "year":
      startDate = new Date(now.getFullYear(), 0, 1);
      endDate = new Date(now.getFullYear() + 1, 0, 0);
      break;
    default:
      throw new Error("Invalid period");
  }

  return { startDate, endDate };
}

const reportController = {
  getRevenue: async (req, res) => {
    try {
      const { period } = req.params;
      const { startDate, endDate } = getDateRange(period);

      const pipeline = [
        {
          $match: {
            createdAt: { $gte: startDate, $lt: endDate },
            status: "Success",
          },
        },
        {
          $group: {
            _id: null,
            totalRevenue: { $sum: "$totalPrice" },
            orders: { $push: "$$ROOT" },
          },
        },
        {
          $project: {
            _id: 0,
            totalRevenue: 1,
            orders: {
              $map: {
                input: "$orders",
                as: "order",
                in: {
                  _id: "$$order._id",
                  customerId: "$$order.customerId",
                  totalPrice: "$$order.totalPrice",
                  name: "$$order.name",
                  phone: "$$order.phone",
                  address: "$$order.address",
                  createdAt: "$$order.createdAt",
                },
              },
            },
          },
        },
      ];

      const result = await Order.aggregate(pipeline);

      const response = {
        period,
        startDate,
        endDate,
        totalRevenue: result.length > 0 ? result[0].totalRevenue : 0,
        orders: result.length > 0 ? result[0].orders : [],
      };
      sendResponse(res, 200, "Lấy báo cáo doanh thu thành công", {
        revenue: response,
      });
    } catch (error) {
      console.error(error);
      sendResponse(res, 500, "Lỗi hệ thống lấy doanh thu", {
        error: error.toString(),
      });
    }
  },

  getOrdersSumary: async (req, res) => {
    try {
      const orderSummary = await Order.aggregate([
        {
          $group: {
            _id: "$status",
            count: { $sum: 1 },
            averageValue: { $avg: "$totalPrice" },
          },
        },
      ]);

      const totalOrders = orderSummary.reduce(
        (sum, status) => sum + status.count,
        0
      );
      const overallAverageValue =
        orderSummary.reduce(
          (sum, status) => sum + status.averageValue * status.count,
          0
        ) / totalOrders;

      sendResponse(res, 200, "Lấy báo cáo tóm tắt đơn hàng thành công", {
        ordersSumary: {
          totalOrders,
          overallAverageValue,
          statusBreakdown: orderSummary,
        },
      });
    } catch (error) {
      console.error(error);
      sendResponse(res, 500, "Lỗi hệ thống lấy tóm tắt đơn hàng", {
        error: error.toString(),
      });
    }
  },
};

module.exports = reportController;
