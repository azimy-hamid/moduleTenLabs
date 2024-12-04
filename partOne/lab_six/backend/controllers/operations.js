import express from "express";
import * as math from "mathjs";
const router = express.Router();

router.post("/evaluate", (req, res) => {
  try {
    const { expression } = req.body; // Get the expression from the query parameter

    if (!expression) {
      return res.status(400).json({ error: "Expression is required" });
    }

    const result = math.evaluate(expression);

    // Send back the result
    res.status(200).json({ result });
  } catch (error) {
    console.error("Error evaluating expression:", error);
    res.status(500).json({ error: "Invalid mathematical expression" });
  }
});

export default router;
