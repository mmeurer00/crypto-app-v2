import "dotenv/config";
import cors from "cors";
import express from "express";
import { coinsList } from "./data";
import { getCoinById, getCoinByQuery } from "./utils";

const app = express();

app.use(cors());

app.get("/api/stats/all", (req, res) => {
  res.status(400).json(coinsList);
});

app.get("/api/stats/:id", (req, res) => {
  const result = getCoinByQuery(req.params.id);
  res.json(result);
});

app.get("/api/stats/coin/:id", (req, res) => {
  const coinDetails = getCoinById(req.params.id);
  res.json(coinDetails);
});

app.listen(process.env.PORT || 5050, () =>
  console.log("API up and running at port " + process.env.PORT || 5050)
);
