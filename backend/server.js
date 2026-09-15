import express from "express";
import cors from "cors";
import contactRouter from "./routes/contact.js";
import paragraphRouter from "./routes/paragraph.js";

const app = express();
const PORT = process.env.PORT || 5005;

app.use(cors());
app.use(express.json());

// Simple request logger
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Search & Contact API is running" });
});

app.use("/api/paragraph", paragraphRouter);
app.use("/api/contact", contactRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ success: false, message: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
