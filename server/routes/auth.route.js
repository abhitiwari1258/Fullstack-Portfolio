import express from 'express'
import jwt from 'jsonwebtoken'

const router = express.Router();

router.post('/login',async(req,res)=>{
    const {name,email,password} = req.body;

    if(email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD){
        return res.status(401).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign({email}, process.env.JWT_SECRET,{expiresIn: "10m"});

    res.json({token})
})

export default router