const express = require("express");
const { adminMiddleware } = require("../middleware/adminMiddleware");
const { authenticate } = require("../middleware/authMiddleware");
const {
  addOrder,
  updateOrderStatus,
  getTotalOrders,
  getAllOrders,
  deleteOrder,
} = require("../controllers/ordersController");

const OrderRouter = express.Router();

OrderRouter.post("/add", authenticate, addOrder);
OrderRouter.patch("/:id/status", adminMiddleware, updateOrderStatus);
OrderRouter.get("/total", adminMiddleware, getTotalOrders);
OrderRouter.get("/all", adminMiddleware, getAllOrders);
OrderRouter.delete("/orders/:id", adminMiddleware, deleteOrder);


module.exports = OrderRouter;
