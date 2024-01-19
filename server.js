const express = require("express");
const app = express();
const path = require("path")
require("dotenv").config();



app.set("view engine","ejs");
app.set("views",__dirname+"/views");
app.use(express.static(path.join(__dirname,"public")));


app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/signup",(req,res)=>{
    res.render("signup")
})






app.listen(8080,()=>{
 console.log("server is running")
})