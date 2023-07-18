const express = require("express");
const cors = require("cors")
const connecttoMongo = require("./database/db")

const app = express();
const port = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());
app.disable('x-powered-by')

app.get("/",(req,res)=>{
    res.send("Hello World")
})

connecttoMongo().then(()=>{
    try {
        app.listen(port,()=>{
            console.log(`Server listening to http://localhost:${port}`);
        })
    } catch (error) {
        console.log("Connection to the server unsuccessfull")
    }

}).catch(err=>{
    console.log(`Invalid Connection error is ${err}`)
});