const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
let noti = "";

const connection = mysql.createConnection({
    host: "sql12.freemysqlhosting.net",
    user: "sql12329800",
    password: "iQDic7V2Zr",
    database: "sql12329800"
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

// query or reach us area
app.post("/reach", (req, res) => {
    let post = {
        Name : req.body.name,
        email: req.body.email_add,
        subject: req.body.subject,
        message: req.body.message
    };
    let query = "INSERT INTO reach_us SET ?";
    let search = `SELECT * FROM user_table WHERE email="${post.email}"`;
    connection.query(search, (err, resu) =>{
        console.log(resu);
        if(err) throw err;
        
        if(resu.length!=0)
        {
            console.log("Match Found");
            connection.query(query, post, (err, result) =>{
                console.log(result);
                if(err) throw err;
            });
            noti = "Your query is posted";
            console.log("Successfully submited");
        }
        else
        {
            console.log("Not Found");
            noti = "Please Register";
        }
        res.redirect("/result");
        if(err) throw err;
    });
});

app.get("/result", (req, res) => {
    res.render("result", {notifi: noti});
});

app.post("/fgt pss", (req, res) => {
    noti = "Your query is posted";
    console.log(req.body);
    res.render("index", {notifi: noti});
    
});

// register area
app.post("/register", (req, res) => {
    noti = "You Have sucessfully registered";
    let post = {
        Name : req.body.name2,
        contact: req.body.phone,
        email: req.body.email2,
        password: req.body.password2
    };
    let query = "INSERT INTO user_table SET ?";
    connection.query(query, post, (err, result) =>{
        console.log(result);
        if(err) throw err;
    });
    console.log("SuccessFully Registered");
    res.redirect("/result");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is running on port 3000");
})
