const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (request, response) => {
  response.send("hello world");
});

app.get("/json", (request, response) => {
  response.status(200).json({ name: "Tyler", party: true });
});

app.listen(3000, () => {
  console.log("Express intro running on localhost:3000");
});
