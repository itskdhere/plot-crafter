import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "512kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

import plotRouter from "./routes/plot.routes";

app.use("/api/v1/plot", plotRouter);

export default app;
