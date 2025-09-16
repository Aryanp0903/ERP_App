const express = require("express");
const Product = require("../models/Product");
const router = express.Router();

// Get all
router.get("/", async (req, res) => res.json(await Product.find().populate("supplier")));

// Add
router.post("/", async (req, res) => res.json(await Product.create(req.body)));

// Update
router.put("/:id", async (req, res) =>
  res.json(await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }))
);

// Delete
router.delete("/:id", async (req, res) => res.json(await Product.findByIdAndDelete(req.params.id)));

module.exports = router;
