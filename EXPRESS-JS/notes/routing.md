 
# 📅 Day 9 – Express Routing

**File Name:** `day-9-routing.md`


## 🔹 Basic Express Setup

```js
const express = require("express");
const app = express();

// POST data read karne ke liye middleware
app.use(express.json());

/*
express() → server app banata hai
express.json() → POST body ko read karne deta hai
*/
```


## 1️⃣ GET Route (Data lena)

```js
app.get("/", (req, res) => {
  res.send("Home Page");
});

/*
GET:
- Browser se direct hit hota hai
- Data read karne ke liye use hota hai
- Example: http://localhost:8080/
*/
```


## 2️⃣ POST Route (Data bhejna)

```js
app.post("/login", (req, res) => {
  const user = req.body.username;
  res.send(`User ${user} logged in`);
});

/*
POST:
- Client se data bhejne ke liye
- Data req.body me milta hai
- React / Postman se use hota hai
*/
```

📌 Example POST body:

```json
{
  "username": "akash"
}
```


## 3️⃣ Route Params (Dynamic URL) 🔥

```js
app.get("/user/:id", (req, res) => {
  res.send(`User ID is ${req.params.id}`);
});

/*
Route Params:
- URL ka dynamic part
- :id → variable
- req.params.id → value

Example URL:
 /user/101
*/
```


### 🔹 Multiple Route Params

```js
app.get("/product/:category/:id", (req, res) => {
  res.send(req.params);
});

/*
URL:
 /product/mobile/55

Output:
{
  category: "mobile",
  id: "55"
}
*/
```


## 4️⃣ Query Params (Optional Data)

```js
app.get("/search", (req, res) => {
  res.send(req.query);
});

/*
Query Params:
- URL ke end me aate hain
- Optional hote hain
- ? ke baad start hote hain

Example URL:
 /search?name=akash&age=22
*/
```


### 🔹 Single Query Param

```js
app.get("/filter", (req, res) => {
  res.send(`Sort by ${req.query.sort}`);
});

/*
URL:
 /filter?sort=price
*/
```


## 🧠 Route Params vs Query Params

| Route Params | Query Params  |
| ------------ | ------------- |
| Mandatory    | Optional      |
| URL ka part  | URL ke end me |
| `/user/:id`  | `?page=1`     |
| `req.params` | `req.query`   |


## 🔹 Server Start

```js
app.listen(8080, () => {
  console.log("Server running on port 8080");
});

/*
app.listen():
- Server start karta hai
- Port pe request sunta hai
*/
```


## 🔥 Complete Request Flow

```
Client Request
   ↓
Middleware (express.json)
   ↓
Route Match (GET / POST)
   ↓
Logic Execute
   ↓
Response Send
```


## ✅ Day 9 Final Summary

* `GET` → data read
* `POST` → data send
* `req.params` → dynamic URL data
* `req.query` → optional URL data
* `req.body` → POST data
* `app.listen()` → server ON


## 🎯 Real Project Mapping

* `/user/:id` → Profile page
* `/products/:id` → Product detail
* `/search?q=phone` → Search
* `POST /login` → Authentication


