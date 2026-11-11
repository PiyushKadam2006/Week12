const express = require("express");

const app =express();//created instance 


app.get("/",(req,res)=>{
    res.send("hello to root .")
    // return ;
})
app.get("/home",(req,res)=>{
    res.send("hello to home page  .")
    // return ;
})


app.listen(3000);//star server on port no 3000
//ye package Cannot GET /home etc kuch show karata he, unlike http module vo loadiing me rokta he 
//bahut sare if ki codition nahi lagnai padegi , bade project ki liye 
//multiple file create karna easy ho jata he + file strucuted rehti he .


