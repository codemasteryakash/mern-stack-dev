const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.end("Hello Server");
  fs.writeFile("index.txt", "Hello Man How Are You !", "utf-8")
});


// SERVER RUNING ON PORT NO : 3000 -/
server.listen(3000, () => {
  console.log("Server runing 👉 http://localhost:3000");
});
