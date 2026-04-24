import dotenv from 'dotenv'
import express from 'express'
import jwt from 'jsonwebtoken'

dotenv.config()

const router = express.Router();

router.post('/login',async(req,res)=>{
    const {email,password} = req.body;

    if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD){
        return res.status(401).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign({email}, process.env.JWT_SECRET,{expiresIn: "10m"});

    return res.status(200).json({
        success: true,
        token
    })
})

export default router