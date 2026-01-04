const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath = "";

  // ROUTING
  if (req.url === "/") {
    filePath = path.join(__dirname, "public", "index.html");
  } else if (req.url === "/style.css") {
    filePath = path.join(__dirname, "public", "style.css");
  } else if (req.url === "/logo.png") {
    filePath = path.join(__dirname, "public", "logo.png");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Page Not Found");
    return;
  }

  // CONTENT TYPE LOGIC
  const ext = path.extname(filePath);
  let contentType = "text/plain";

  if (ext === ".html") contentType = "text/html";
  if (ext === ".css") contentType = "text/css";
  if (ext === ".png") contentType = "image/png";
  if (ext === ".jpg") contentType = "image/jpeg";

  // READ & SEND FILE
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end("Server Error");
      return;
    }

    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
});

server.listen(3000, () => {
  console.log("Server running 👉 http://localhost:3000");
});
