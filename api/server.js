import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Express app working!" });
});

app.get("/hello", (req, res) => {
  res.json({ message: "Hello route working!" });
});

export default app;
