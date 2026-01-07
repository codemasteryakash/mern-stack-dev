const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;

/* ======================
   MIDDLEWARE
====================== */

// JSON body read karne ke liye
app.use(express.json());

// Frontend se request allow karne ke liye
app.use(cors({
  origin: "http://localhost:5173"
}));

/* ======================
   ROUTE: LOGIN
====================== */

app.post("/api/login", (req, res) => {
  // 1️⃣ Frontend se data yahan aata hai
  const { email, password } = req.body;

  console.log("Email:", email);
  console.log("Password:", password);

  // 2️⃣ Validation
  if (!email || !password) {
    return res.status(400).json({
      message: "Email or password missing"
    });
  }

  // 3️⃣ Dummy check (abhi database nahi)
  if (email === "admin@gmail.com" && password === "123456") {
    return res.status(200).json({
      message: "Login successful"
    });
  } else {
    return res.status(401).json({
      message: "Invalid email or password"
    });
  }
});

/* ======================
   SERVER START
====================== */

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
