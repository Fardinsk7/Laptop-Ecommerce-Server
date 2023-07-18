const mongoose = require("mongoose");
require("dotenv").config()

mongoose.set("strictQuery", false);
const connecttoMongo = async()=>{
    
    const db = await mongoose.connect(`${process.env.MONGO_URL}`);
    console.log("Connection to Mongodb successfull");
    return db;
}

module.exports = connecttoMongo;
