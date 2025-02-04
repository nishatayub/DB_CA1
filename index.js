const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const restoModel = require("./models/restoModel");
const itemModel = require("./models/itemModel");
dotenv.config();
const app = express();

const Port = process.env.PORT;

app.use(express.json());

const connectDB = async(req,res)=>{
    try{
        await mongoose.connect("mongodb+srv://nishatayub702:nishat702@cluster0.qr0na.mongodb.net/users");
        console.log("MongoDB Connected");
    }catch(err){
        console.error(err.message);
    }
}
connectDB();

app.listen(Port, ()=>{
    console.log(`listening on port ${Port}`);
});

app.get("/",(req,res)=>{
    res.send("Root is working");
});