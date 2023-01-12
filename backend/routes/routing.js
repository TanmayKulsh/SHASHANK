var express = require("express");
var router = express.Router();
const mysql = require("mysql");
// const { json } = require("require/consumers");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',  //please change username
    password: 'password', //please change password
    database: 'tanmaydb'
});

// create database
db.connect((err) =>{
    if(err){
        throw err;
    }
    console.log("my sql connected");
});

router.get("/",(req,resp) => {
    resp.send("<h1> hello </h1>");
})

router.get("/createdb",(req,resp) => {
    let sql = "CREATE DATABASE tanmaydb";
    db.query(sql,(err,result) => {
        if(err) throw err;
        console.log(result);
        resp.send(result);
    })
});

// create table auth
router.get("/createemp",(req,resp) => {
    let sql = "create table emp(token int primary key auto_increment,empid varchar(25),empname varchar(25));"
    db.query(sql,(err,result) => {
        if(err) throw err;
        console.log(result);
        resp.send(result);
    });
});

//inserting data
router.get("/insertdata",(req,resp) => {
    let sql = 'insert into emp value(1,"tanmay@gmail.com","Tanmay");'
    db.query(sql,(err,result) => {
        if(err) throw err;
        console.log(result);
        resp.send(result);
    });
});

//getting the data
router.get("/getalldata",(req,resp) => {
    let sql = "select * from emp;";
    db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        resp.send(result);
    });
});

//calling procedure 
router.get("/updateemp/:token/:empname",(req,resp) => {
    let sql = `call updateemp(${req.params.token},${req.params.empname});`;
    db.query(sql, (err,result) => {
        if(err) throw err;
        console.log(result);
        resp.send(result);
    });
});


module.exports = router;