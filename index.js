import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user-route.js";

const app = express();

dotenv.config();

const port = process.env.PORT || 5000;
const db = process.env.MONGO_URI;

try{
    mongoose.connect(db)
    console.log("connected to database");
}catch(error){
    console.log(error);
}

// app.get('/', (req, res) => {
//   res.send('Hellopritam!')
// })

app.use("/user",userRoute);

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})

