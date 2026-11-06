import express from "express";
import { connectDB } from "./config/db.ts";

const app = express();

await connectDB();

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Kapil Store server chal raha hai" });
});

const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
  console.log(`Server chal raha hai: http://localhost:${PORT}`);
});