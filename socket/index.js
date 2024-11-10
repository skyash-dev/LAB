const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

server.listen(9000, () => {
  console.log("Server is listening at 9000");
});
