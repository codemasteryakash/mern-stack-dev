const express = require("express");
const app = express();

// GET
app.get("/", (req, res) => {
  res.send("Home");
});

// Route Params

app.get("/user/:id", (req, res) => {
  if (!req.params.id) {
    return res.status(400).send("Bad Request");
  }
  res.status(200).send("User Found");
});

// Query Params
app.get("/search", (req, res) => {
  res.send(req.query);
});

// POST
app.post("/login", (req, res) => {
  res.send("Login API");
});

app.listen(8080, () => {
  console.log("Server running on 8080");
});

/*
FLOW:
1. Request aayi
2. Route match hua
3. Logic chala
4. Response gaya
*/
