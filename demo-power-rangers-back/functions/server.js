import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import { getMyTop5PowerRangersSeasons } from "./topSeasons.js";

var app = express();
app.use(cors());

var port = process.env.PORT || 5000;
const router = express.Router();

router.get("/my-top-5-power-rangers-seasons", function (req, res) {
  res.json(getMyTop5PowerRangersSeasons());
});

// Iniciar servidor
app.use('/.netlify/functions/server', router);
export const handler = serverless(app);
// app.listen(port);