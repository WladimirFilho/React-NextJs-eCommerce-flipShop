import express from "express";
// Evirement Variables
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

connectDB();
console.log("Server running");
const port = process.env.PORT || 4000;

const app = express();

// Free access from CORS policy
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//API end point to be consumed
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
