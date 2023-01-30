// console.log("Hello22");

const express=require("express");
const app=express();
const mongoose=require("mongoose"); 
const dotenv=require("dotenv");
const userRouter=require("./routes/user");
// const userPostUser=require("./routes/user");


dotenv.config();

mongoose.set("strictQuery", false);
mongoose.connect
(process.env.MONGO_URL
).then(()=>{
    console.log("Db Connection Successfull")
}).catch((err)=>{
    console.log("Error")
})

// app.get("/api/test",()=>{
//     console.log("test is successfull");  // we are making all route together in routes folder
// })


app.use(express.json())
app.use("/api/user/",userRouter)
// app.use("/api/user/",userRouter)


app.listen(process.env.port || 5000,()=>{
    console.log("Backend is running on port 5000")
})
