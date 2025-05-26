import express from "express";
import IncomeStatement from "../models/IncomeStatement.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const {
    userId,
    month,
    revenue,
    costOfGoodsSold,
    operatingExpenses,
    taxes,
    additionalCategories,
  } = req.body;

  try {
    let incomeStatement = await IncomeStatement.findOne({ userId, month });

    if (incomeStatement) {
      incomeStatement.revenue = revenue;
      incomeStatement.costOfGoodsSold = costOfGoodsSold;
      incomeStatement.operatingExpenses = operatingExpenses;
      incomeStatement.taxes = taxes;
      incomeStatement.additionalCategories = additionalCategories;

      await incomeStatement.save();
      return res.json(incomeStatement);
    } else {
      incomeStatement = new IncomeStatement({
        userId,
        month,
        revenue,
        costOfGoodsSold,
        operatingExpenses,
        taxes,
        additionalCategories,
      });

      await incomeStatement.save();
      return res.json(incomeStatement);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.get("/:userId/:month", async (req, res) => {
  const { userId, month } = req.params;

  try {
    const incomeStatement = await IncomeStatement.findOne({ userId, month });
    if (!incomeStatement) {
      return res.status(404).json({ msg: "Income statement not found" });
    }
    return res.json(incomeStatement);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

export default router;
