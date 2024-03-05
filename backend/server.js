const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.send("hello world");
})

app.listen(3000, function() {
    console.log("server started at port 3000");
})