
## 📄 **Day-01-introduction.js**

```js
// 📅 Day 1 – Introduction to Node.js

console.log("Hello Node.js");

// Node.js allows JavaScript to run outside the browser
// It uses V8 engine and event-driven, non-blocking architecture
```



## 📄 **Day-02-core-modules.js**

```js
// 📅 Day 2 – Node Core Modules (fs, path, os)

const fs = require("fs");
const path = require("path");
const os = require("os");

// fs → file system operations
fs.writeFileSync("sample.txt", "Hello FS Module");

// path → safe file path creation
const filePath = path.join(__dirname, "sample.txt");
console.log(filePath);

// os → system information
console.log(os.platform());
console.log(os.userInfo());

// fs handles files
// path builds safe file paths
// os gives system-related information
```



## 📄 **Day-03-http-module.js**

```js
// 📅 Day 3 – HTTP Module (Server, req, res)

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home Page");
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

// http creates server
// req = client request
// res = server response
// res.end() closes the response
```



## 📄 **Day-04-modules-system.js**

```js
// 📅 Day 4 – Module System

// math.js
function add(a, b) {
  return a + b;
}

module.exports = add;

// index.js
const addFn = require("./math");
console.log(addFn(2, 3));

// require() imports a module
// module.exports decides what to share
// every file in Node.js is a module
```



## 📄 **Day-05-event-loop.js**

```js
// 📅 Day 5 – Event Loop

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

setImmediate(() => {
  console.log("Immediate");
});

console.log("End");

// Call Stack runs sync code first
// setTimeout goes to event queue
// setImmediate runs after current phase
// Event loop decides execution order
```



## 📄 **Day-06-async-javascript.js**

```js
// 📅 Day 6 – Async JavaScript

// Callback
setTimeout(() => {
  console.log("Callback done");
}, 1000);

// Promise
const task = new Promise((resolve) => {
  setTimeout(() => resolve("Promise done"), 1000);
});

task.then(result => console.log(result));

// async / await
async function runTask() {
  const result = await task;
  console.log(result);
}

runTask();

// Callback = old async pattern
// Promise = better async handling
// async/await = clean & readable async code
```



## ✅ FINAL NOTE (IMPORTANT COMMENT)

```js
// Node.js core is small
// Understanding async + fs + http is enough
// Frameworks like Express are built on top of this
```



```
NOTES SAVED
```

