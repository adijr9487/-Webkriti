const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
let noti = "";

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sampledb"
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index", {notifi: noti});
});
app.post("/login", (req, res) => {
    noti = "You have successfully Login";
    console.log(req.body);
    res.render("index", {notifi: noti});
});
app.post("/event", (req, res) => {
    noti = "successfully register for Programming Event";
    console.log(req.body);
    res.render("index", {notifi: noti});
});
app.post("/reach", (req, res) => {
    noti = "Your query is posted";
    console.log(req.body);
    res.render("index", {notifi: noti});
});
app.post("/fgt pss", (req, res) => {
    noti = "Your query is posted";
    console.log(req.body);
    res.render("index", {notifi: noti});
});


app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running on port 3000");
})