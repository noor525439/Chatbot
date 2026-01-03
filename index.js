import express from "express";
import mongoose from "mongoose";
import chatbotRoutes from "./Routes/chatbot.route.js";
import cors from "cors";


const app = express();
const url = "mongodb://localhost:27017";
app.use(cors());
app.use(express.json());

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

//Defining Routes
app.use("/bot/v1/",chatbotRoutes)

app.listen(3400);