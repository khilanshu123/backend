const express = require("express");
const app =  express();
require('dotenv').config()
const port = 4000;

app.get("/about",(req,res)=>{
    res.send("hello about");

});
app.listen(process.env.PORT,()=>{
    console.log("run on pot nu"+ `${port}`)
})