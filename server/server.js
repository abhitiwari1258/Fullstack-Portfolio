import express from "express";
import cors from "cors"
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import projectRoutes from './routes/projectRoutes.js'
import contactRoutes from './routes/contact.route.js'

dotenv.config()
connectDB()

const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())
app.use("/api/projects",projectRoutes);
app.use("/api/contact", contactRoutes)

app.get('/',(req,res)=>{
    res.send("Api is runnung")
})

app.listen(port,()=>{
    console.log((`Server runnung on port ${port}`));
})