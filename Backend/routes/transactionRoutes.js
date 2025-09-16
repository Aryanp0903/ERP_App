const express = require("express");
const Transaction = require("../models/Transaction");
const Product = require("../models/Product");
const router = express.Router();

// Get all
router.get("/", async (req, res) => res.json(await Transaction.find().populate("product")));

// Add purchase/sale
router.post("/", async (req, res) => {
  const { product, type, quantity } = req.body;
  const txn = await Transaction.create({ product, type, quantity });

  // Update product stock
  const p = await Product.findById(product);
  if (type === "purchase") p.quantity += quantity;
  else if (type === "sale") p.quantity -= quantity;
  await p.save();

  res.json(txn);
});

module.exports = router;
