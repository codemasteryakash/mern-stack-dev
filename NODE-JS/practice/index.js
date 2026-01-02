const fs = require("fs");

// file khoja raha hu
if (fs.existsSync("demo.txt", "utf-8")) {
  console.log("file found !");
} else {
  console.log("not found !");
}
// data read kar rahaha hu
try {
  const data = fs.readFileSync("demo.txt", "utf-8");
  console.log(data);
} catch (eror) {
  console.log("Eror : ", eror);
}

fs.mkdir("uploads", (err) => {
  if (err) console.log("Already exists");
  else console.log("Folder created");
});
fs.readdir("./", (err, files) => {
  if (err) return console.log(err);
  console.log(files);
});
