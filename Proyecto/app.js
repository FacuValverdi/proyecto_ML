const express=require("express");
const app=express();
const path=require("path")
const port=process.env.PORT || 3001;
app.listen(port,()=> console.log(`Servidor levantado con exito ${port}`))
app.use(express.static('public'));
app.get("/",(req,res)=>
    res.sendFile(path.join(__dirname,"/views/home.html") 
))
app.get("/register.html",(req,res)=>
    res.sendFile(path.join(__dirname,"/views/register.html") 
))
app.get("/login.html",(req,res)=>
    res.sendFile(path.join(__dirname,"/views/login.html") 
))