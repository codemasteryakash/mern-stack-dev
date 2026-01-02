# 📘 DAY 1 – Node.js Core Modules

## 🎯 Goal
Aaj hum Node.js ke 4 most important modules seekhenge:
- fs (File System)
- path
- os
- http

Ye sab Express ke foundation hain.

---

# 🔹 1. fs (File System Module)

👉 File read/write ke liye use hota hai.

## ✍️ Write File
```js
const fs = require("fs");

fs.writeFileSync("demo.txt", "Hello from Node.js");
````

## 📖 Read File

```js
const fs = require("fs");

const data = fs.readFileSync("demo.txt", "utf-8");
console.log(data);
```

---

## 🔁 Async Version (Recommended)

```js
const fs = require("fs");

fs.readFile("demo.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

---

# 🔹 2. path Module

👉 File path handle karta hai (OS independent)

```js
const path = require("path");

console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
```

### Join paths:

```js
const filePath = path.join(__dirname, "folder", "file.txt");
console.log(filePath);
```

---

# 🔹 3. os Module

👉 System information deta hai

```js
const os = require("os");

console.log(os.platform());
console.log(os.arch());
console.log(os.totalmem());
console.log(os.freemem());
```

---

# 🔹 4. http Module (MOST IMPORTANT)

👉 Server banane ke liye use hota hai

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Hello from Node Server");
  res.end();
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
```

Browser me open karo:

```
http://localhost:5000
```

---

# 🔁 Request & Response

```js
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("About Page");
  } else {
    res.end("404 Page");
  }
});
```

---

# 🧠 Important Concepts

| Concept    | Meaning                  |
| ---------- | ------------------------ |
| require()  | module import            |
| __dirname  | current folder           |
| __filename | current file             |
| async      | non-blocking             |
| callback   | function inside function |

---

# 🧪 Practice Tasks

✅ Create a file using fs
✅ Read file content
✅ Create simple server
✅ Add route `/about`
✅ Log system info

---

# 🎯 Day 1 Complete

You learned:
✔ fs
✔ path
✔ os
✔ http
✔ Node basics

---

# 🚀 Tomorrow (Day 2 Preview)

* Express.js Introduction
* app.get()
* Routing
* Middleware

---

## 🔥 Tip of the Day

> "Node.js ko samajhne ke liye server banana zaroori hai."

---

✅ Day 1 Done!
