var express = require("express");

var app = express();

app.use(express.logger());
app.use(express.static(__dirname + "/front"));

app.listen(3000);

console.log("Server started on port 3000");
