const sendResponse = require("../helper/sendResponse");
const SupportTicket = require("../models/SupportTicket");
require("dotenv").config();

const supportController = {
    //customer
        // Lấy toàn bộ support ticket của customer
    getSupportCustomer: async (req, res) => {
        try {
            const customerID = req.user._id;
            const supportTickets = await SupportTicket.find({ customer: customerID }).sort({ createdAt: -1 });
            sendResponse(res, 200, "Lấy dữ liệu Support Ticket thành công", supportTickets);
        } catch (error) {
            sendResponse(res, 400, "Lỗi lấy dữ liệu Support Ticket", error.toString());
        }
    },
        //tao support ticket moi
    createSupportTicket: async (req, res) => {
        try {
            const { subject, description } = req.body;
            const customerID = req.user._id;
            const newSupportTicket = new SupportTicket({
                customer: customerID,
                admin: null,
                subject,
                status: "pending",
                description,
                respond: "",
            });
            await newSupportTicket.save();
            sendResponse(res, 200, "Tạo Support Ticket thành công", newSupportTicket);    
        } catch (error) {
            sendResponse(res, 400, "Lỗi tạo Support Ticket", error.toString());
        }
    },
        //sua support ticket
    updateSupportTicket: async (req, res) => {
        try {
            const { subject, description } = req.body;
            const supportTicketID = req.params.id;
            const supportTicket = await SupportTicket.findById(supportTicketID);
            if (!supportTicket) {
                return sendResponse(res, 400, "Không tìm thấy Support Ticket", null);
            }
            if (supportTicket.status === 'finish' || supportTicket.status === 'update') {
                return sendResponse(res, 400, "Support Ticket đã hoàn thành. Vui lòng tạo một Support Ticket mới.", null);
            }
            supportTicket.subject = subject || supportTicket.subject;
            supportTicket.description = description || supportTicket.description;
            await supportTicket.save();
            sendResponse(res, 200, "Cập nhật Support Ticket thành công", supportTicket);
        } catch (error) {
            sendResponse(res, 400, "Lỗi cập nhật Support Ticket", error.toString());
        }
    },
        //xoa support ticket
    deleteSupportTicket: async (req, res) => {
        try {
            const supportTicketID = req.params.id;
            const supportTicket = await SupportTicket.findById(supportTicketID);
            if (!supportTicket) {
                return sendResponse(res, 400, "Không tìm thấy Support Ticket", null);
            }
            if (supportTicket.status === 'finish' || supportTicket.status === 'update') {
                return sendResponse(res, 400, "Support Ticket đã được phản hồi. Không thể xóa.", null);
            }
            await supportTicket.delete();   
            sendResponse(res, 200, "Xóa Support Ticket thành công", null);
        } catch (error) {
            sendResponse(res, 400, "Lỗi xóa Support Ticket", error.toString());
        }
    },
    //admin
        // Lấy toàn bộ support ticket của
    getSupportAdmin: async (req, res) => {
        try {
            const adminID = req.user._id;
            const supportTickets = await SupportTicket.find().sort({ createdAt: -1 });
            sendResponse(res, 200, "Lấy dữ liệu Support Ticket thành công", supportTickets);
        } catch (error) {
            sendResponse(res, 400, "Lỗi lấy dữ liệu Support Ticket", error.toString());
        }
    },
        //phan hoi support ticket
    respondSupportTicket: async (req, res) => {
        try {
            const adminID = req.user._id;
            const respond = req.body.respond;
            const supportTicketID = req.params.id;
            const supportTicket = await SupportTicket
                .findById(supportTicketID)
            if (!supportTicket) {
                return sendResponse(res, 400, "Không tìm thấy Support Ticket", null);
            }
            if (supportTicket.status === 'finish' || supportTicket.status === 'update') {
                supportTicket.respond = respond;
                supportTicket.status = 'update';
                supportTicket.admin = adminID;
                await supportTicket.save();
                return sendResponse(res, 200, "Update Phản hồi Support Ticket thành công", supportTicket);
            }
            supportTicket.respond = respond;
            supportTicket.status = 'finish';
            supportTicket.admin = adminID;
            await supportTicket.save();
            return sendResponse(res, 200, "Phản hồi Support Ticket thành công", supportTicket);
        } catch (error) {
            return sendResponse(res, 400, "Lỗi phản hồi Support Ticket", error.toString());
        }
    }
};
module.exports = supportController;
