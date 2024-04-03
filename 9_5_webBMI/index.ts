// const express = require("express");
import express from "express";
const app = express();
// app.use(express.json());

import { calculateBmi } from "./bmiCalculator";

app.get("/bmi", (_req, res) => {
  const weight = Number(_req.query.weight);
  const height = Number(_req.query.height);

  const bmi = calculateBmi(weight, height);
  res.send(bmi);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
