import express from "express";
import mongoose from "mongoose";
import router from "../routes/authRoutes.js"; 
import cors from "cors";

const server = express();


server.use(express.json());
server.use(cors());


server.get("/", (req, res) => {
  res.send("Welcome to the E-commerce Backend!");
});


mongoose
  .connect(
    "mongodb+srv://vikaskumar20012001:vikas1234@demo-wd-8.sdcsiw7.mongodb.net/E-commerce"
  )
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });


server.use("/auth", router);


export default server;
