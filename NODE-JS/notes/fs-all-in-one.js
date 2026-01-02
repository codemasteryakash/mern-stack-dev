// fs-all-in-one.js
// Node.js File System – All 7 Core Methods (Quick Reference)

const fs = require("fs");

// 1️⃣ writeFileSync → create / overwrite file
fs.writeFileSync("demo.txt", "Hello World\n", "utf-8");

// 2️⃣ appendFileSync → add data to file
fs.appendFileSync("demo.txt", "This is appended text\n", "utf-8");

// 3️⃣ readFileSync → read file content
const data = fs.readFileSync("demo.txt", "utf-8");
console.log("File Content:\n", data);

// 4️⃣ existsSync → check file exists or not
if (fs.existsSync("demo.txt")) {
  console.log("File exists");
}

// 5️⃣ mkdirSync → create folder
if (!fs.existsSync("myFolder")) {
  fs.mkdirSync("myFolder");
  console.log("Folder created");
}

// 6️⃣ readdirSync → read folder files
const files = fs.readdirSync("./");
console.log("Files in directory:", files);

// 7️⃣ unlinkSync → delete file
fs.unlinkSync("demo.txt");
console.log("File deleted");
