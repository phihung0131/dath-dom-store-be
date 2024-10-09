const Voucher = require("../models/Voucher");
const OrderVoucher = require("../models/OrderVoucher");
const sendResponse = require("../helper/sendResponse");

const voucherController = {
  // Add a new voucher
  addVoucher: async (req, res) => {
    try {
      const { code, discountPercent, expirationDate, quantity } = req.body;
      const newVoucher = new Voucher({
        code,
        discountPercent,
        expirationDate,
        quantity,
      });

      await newVoucher.save();
      sendResponse(res, 201, "Thêm voucher mới thành công", newVoucher);
    } catch (error) {
      console.error(error);
      if (error.code === 11000) {
        return sendResponse(res, 400, "Mã voucher đã tồn tại");
      }
      sendResponse(res, 500, "Lỗi hệ thống khi thêm voucher", {
        error: error.toString(),
      });
    }
  },

  // Update an existing voucher
  updateVoucher: async (req, res) => {
    try {
      const { id } = req.params;
      const { discountPercent, expirationDate, quantity } = req.body;

      const updatedVoucher = await Voucher.findByIdAndUpdate(
        id,
        { discountPercent, expirationDate, quantity },
        { new: true, runValidators: true }
      );

      if (!updatedVoucher) {
        return sendResponse(res, 404, "Không tìm thấy voucher");
      }

      sendResponse(res, 200, "Cập nhật voucher thành công", updatedVoucher);
    } catch (error) {
      console.error(error);
      sendResponse(res, 500, "Lỗi hệ thống khi cập nhật voucher", {
        error: error.toString(),
      });
    }
  },

  // Delete a voucher
  deleteVoucher: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedVoucher = await Voucher.delete({ _id: id });

      if (!deletedVoucher) {
        return sendResponse(res, 404, "Không tìm thấy voucher");
      }

      sendResponse(res, 200, "Xóa voucher thành công");
    } catch (error) {
      console.error(error);
      sendResponse(res, 500, "Lỗi hệ thống khi xóa voucher", {
        error: error.toString(),
      });
    }
  },

  // Get all vouchers
  getAllVouchers: async (req, res) => {
    try {
      const vouchers = await Voucher.find();
      sendResponse(res, 200, "Lấy danh sách voucher thành công", vouchers);
    } catch (error) {
      console.error(error);
      sendResponse(res, 500, "Lỗi hệ thống khi lấy danh sách voucher", {
        error: error.toString(),
      });
    }
  },

  // Get a specific voucher
  getVoucher: async (req, res) => {
    try {
      const { id } = req.params;
      const voucher = await Voucher.findById(id);

      if (!voucher) {
        return sendResponse(res, 404, "Không tìm thấy voucher");
      }

      sendResponse(res, 200, "Lấy thông tin voucher thành công", voucher);
    } catch (error) {
      console.error(error);
      sendResponse(res, 500, "Lỗi hệ thống khi lấy thông tin voucher", {
        error: error.toString(),
      });
    }
  },

  // Advanced voucher management: Get voucher usage statistics
  getVoucherStats: async (req, res) => {
    try {
      const { id } = req.params;
      const voucher = await Voucher.findById(id);

      if (!voucher) {
        return sendResponse(res, 404, "Không tìm thấy voucher");
      }

      const usageCount = await OrderVoucher.countDocuments({ voucherId: id });
      const remainingCount = voucher.quantity - usageCount;

      const stats = {
        voucherId: voucher._id,
        code: voucher.code,
        totalQuantity: voucher.quantity,
        usedCount: usageCount,
        remainingCount: remainingCount,
        expirationDate: voucher.expirationDate,
      };

      sendResponse(res, 200, "Lấy thống kê voucher thành công", stats);
    } catch (error) {
      console.error(error);
      sendResponse(res, 500, "Lỗi hệ thống khi lấy thống kê voucher", {
        error: error.toString(),
      });
    }
  },

  // Advanced voucher management: Deactivate expired vouchers
  deactivateExpiredVouchers: async (req, res) => {
    try {
      const currentDate = new Date();
      const expiredVouchers = await Voucher.find({
        expirationDate: { $lt: currentDate },
      });

      for (const voucher of expiredVouchers) {
        await Voucher.delete({ _id: voucher._id });
      }

      sendResponse(res, 200, "Hủy kích hoạt voucher hết hạn thành công", {
        deactivatedCount: expiredVouchers.length,
      });
    } catch (error) {
      console.error(error);
      sendResponse(res, 500, "Lỗi hệ thống khi hủy kích hoạt voucher hết hạn", {
        error: error.toString(),
      });
    }
  },
};

module.exports = voucherController;
