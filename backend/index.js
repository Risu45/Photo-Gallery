const express=require("express");
const cors=require("cors")
const mongoose=require("mongoose");
require("dotenv").config()
const uploadsRoute=require("./routes/uploadsRoute")
const app=express();
app.use(cors());
app.use(express.json())
app.use(express.static("public"));

const PORT=process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI);
if(mongoose.connection){
    console.log("database connected succesfully");
}
app.use(uploadsRoute);
// app.get("/",(req,res)=>{
//     res.send("hii hello")
// })
app.listen(PORT,()=>{
    console.log(`server starte at port ${PORT}`);
})