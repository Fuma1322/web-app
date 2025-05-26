import express from "express";
import Sales from "../models/Sales.js";

const router = express.Router();

// GET all sales
router.get("/", async (req, res) => {
  try {
    const sales = await Sales.find().sort({ date: -1 });
    res.json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { date, product, amount, salesperson, status, paymentMethod, saleType } = req.body;

    if (!date || !product || !amount || !salesperson || !status || !paymentMethod || !saleType) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newSale = new Sales({
      date,
      product,
      amount,
      salesperson,
      status,
      paymentMethod,
      saleType,
    });

    const savedSale = await newSale.save();
    res.status(201).json(savedSale);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { date, product, amount, salesperson, status, paymentMethod, saleType } = req.body;

    const updatedSale = await Sales.findByIdAndUpdate(
      req.params.id,
      {
        date,
        product,
        amount,
        salesperson,
        status,
        paymentMethod,
        saleType,
      },
      { new: true }
    );

    if (!updatedSale) {
      return res.status(404).json({ message: "Sale not found" });
    }

    res.json(updatedSale);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedSale = await Sales.findByIdAndDelete(req.params.id);

    if (!deletedSale) {
      return res.status(404).json({ message: "Sale not found" });
    }

    res.json({ message: "Sale deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;