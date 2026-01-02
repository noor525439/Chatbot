import express from "express";
import mongoose from "mongoose";

const app = express();
const url = "mongodb://localhost:27017";

//Database Connection Code
mongoose.connect(url).then(() => {
console.log("Connected to mongodb")
})
.catch((error)=>{
console.log("Some Error Occured:",error)
})
app.get("/",(req,resp)=>{
    resp.send("Hello world")
})

app.listen(3400);