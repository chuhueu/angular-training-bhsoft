import express, { Application, Request, Response } from "express";
import cors = require("cors");
var colors = require("colors");
import connectDB from "./config/connectDB";
const app: Application = express();

const authRoute = require("./routes/authRoute");
const userRoute = require("./routes/userRoute");

connectDB();

app.use(cors());
app.use(express.json()); // Configure Express to parse incoming JSON data
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.get("/", (req: Request, res: Response) => {
  res.send("APP IS RUNNING");
});
const port = process.env.PORT! || 5000;

app.listen(port, () =>
  console.log(colors.yellow.bold(`Server running on port ${port}`))
);
