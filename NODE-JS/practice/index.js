const http = require("http");
const fs = require("fs/promises");
const path = require("path");

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    try {
      const filePath = path.join(__dirname, "index.txt");

      await fs.writeFile(filePath, "Hello Man", "utf-8");
      const data = await fs.readFile(filePath, "utf-8");

      console.log("File Data:", data);

      res.end("File written & read successfully ✅");
    } catch (error) {
      console.log("Error aaya:", error);
      res.statusCode = 500;
      res.end("Server Error ❌");
    }
  } else {
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running 👉 http://localhost:3000");
});
