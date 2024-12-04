import express from "express";
import cors from "cors";
import operations from "./controllers/operations.js";

const PORT = 3000;
const app = express();
app.use(cors()); // I have used this cause I was getting an error while trying to access my api from the frontend.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ message: "This is the root endpoint" });
});

app.use("/api", operations);

app.listen(PORT || 3000, () => {
  console.log(`Server Three running on port: ${PORT}`);
});
