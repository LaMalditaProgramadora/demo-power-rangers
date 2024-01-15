import express from "express";
import cors from "cors";
import { getMyTop5PowerRangersSeasons } from "./topSeasons.js";

var app = express();
app.use(cors());

var port = process.env.PORT || 5000;

app.get("/my-top-5-power-rangers-seasons", function (req, res) {
  res.json(getMyTop5PowerRangersSeasons());
});

// Iniciar servidor
app.listen(port);
console.log("El servidor se inició correctamente");