fs.readFile("demo.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading file");
    return;
  }
  console.log(data);
});
