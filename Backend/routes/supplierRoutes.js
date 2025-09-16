const express = require("express");
const Supplier = require("../models/Supplier");
const router = express.Router();

router.get("/", async (req, res) => res.json(await Supplier.find()));
router.post("/", async (req, res) => res.json(await Supplier.create(req.body)));

module.exports = router;
