require("dotenv").config();
const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/register", (req, res) => {
  res.send("<h1>Resgister Page</h1>");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Page</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`App is listening to port ${port}`);
});
