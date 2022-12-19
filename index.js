// mongodb+srv://sid:<password>@cluster0.noezw5j.mongodb.net/?retryWrites=true&w=majority

const express=require("express")
const mongoose=require("mongoose")
const app=express();
const bodyParser=require('body-parser');
const cors=require("cors")
require('dotenv').config();
const path=require('path')



mongoose.connect(process.env.MONGODB_URL)
var db=mongoose.connection;
db.on("open",()=>{
    console.log("connected");
})
db.on("error",()=>{
    console.log("dis-connected")
})
app.use(cors());
app.use(bodyParser.json());


require(path.join(__dirname,"./app/Routes/Product-routes"))(app)

app.listen(process.env.PORT,()=>{
    console.log("server is running in port "+process.env.PORT);
})