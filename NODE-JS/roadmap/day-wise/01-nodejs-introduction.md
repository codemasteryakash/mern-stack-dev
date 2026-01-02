 
# 📘 DAY 1 – Node.js Basics 
 
## 🎯 Goal of Day 1 
- Node.js kya hai samajhna   
- Node ka role samajhna (Express se pehle) 
- Basic Node program likhna 
- Node ke core concepts samajhna 
 

 
## 🧠 What is Node.js? 
 
Node.js ek **JavaScript runtime** hai jo JavaScript ko   
**browser ke bahar (server pe)** run karne deta hai. 
 
👉 Pehle JS sirf browser me chalti thi   
👉 Node ne JS ko backend bana diya   
 

 
## 🧩 Node.js Kya Karta Hai? 
 
- Server create karta hai   
- File system access deta hai   
- Network requests handle karta hai   
- Async code run karta hai   
 

 
## 🔥 Important Concept 
 
> **Node.js is NOT a framework**   
> Ye ek runtime environment hai. 
 
Express, MongoDB sab Node ke upar kaam karte hain. 
 

 
## ⚙️ Node vs Browser 
 
| Feature | Browser | Node | 
|------|--------| 
| DOM | ✅ | ❌ | 
| File System | ❌ | ✅ | 
| Fetch | ✅ | ❌ (need library) | 
| Global Object | window | global | 
 

 
## 🧪 First Node Program 
 
### 📄 `index.js` 
```js 
console.log("Hello from Node.js"); 
```` 
 
Run in terminal: 
 
```bash 
node index.js 
``` 
 
Output: 
 
``` 
Hello from Node.js 
``` 
 

 
## 📦 Node Modules System 
 
Node me file import/export hota hai: 
 
### 📄 math.js 
 
```js 
function add(a, b) { 
  return a + b; 
} 
 
module.exports = add; 
``` 
 
### 📄 index.js 
 
```js 
const add = require("./math"); 
console.log(add(5, 3)); 
``` 
 

 
## 📁 Core Modules (Intro) 
 
Node me kuch built-in modules hote hain: 
 
| Module | Use              | 
| ------ | ---------------- | 
| fs     | file read/write  | 
| path   | file path handle | 
| os     | system info      | 
| http   | server banana    | 
 

 
## 📄 Example: fs module 
 
```js 
const fs = require("fs"); 
 
fs.writeFileSync("test.txt", "Hello Node"); 
``` 
 

 
## 🔁 Event Loop (Basic Idea) 
 
Node non-blocking hota hai. 
 
```js 
console.log("Start"); 
 
setTimeout(() => { 
  console.log("Async Task"); 
}, 0); 
 
console.log("End"); 
``` 
 
Output: 
 
``` 
Start 
End 
Async Task 
``` 
 
👉 Node async kaam baad me karta hai. 
 

 
## 🧠 Important Keywords 
 
* require() 
* module.exports 
* event loop 
* non-blocking 
* single-threaded 
 

 
## 📝 Practice Task (Very Important) 
 
✅ Task 1: 
 
* Create a file and write text using `fs` 
 
✅ Task 2: 
 
* Create 2 JS files and export/import a function 
 
✅ Task 3: 
 
* Run a Node file using terminal 
 

 
## 🎯 Today’s Summary 
 
✔ Node.js kya hai 
✔ Node ka role kya hai 
✔ Basic syntax 
✔ File system 
✔ Async concept 
 

 
## 🚀 Tomorrow (Day 2 Preview) 
 
* HTTP Module 
* Create Server 
* req & res 
* First backend server 
 

 
## 🧠 Quote of the Day 
 
> "Backend strong hoga, toh frontend automatically strong lagega." 
 

 
✅ **Day 1 Complete!** 
 