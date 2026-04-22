import express from 'express'
import Contact from '../models/contact.js';
const router = express.Router();

router.post("/", async(req,res)=>{
    const {name,email,message} = req.body;

    try{
        console.log("New Contact : ",{name,email,message})
        const newContact = await Contact.create({
            name,
            email,
            message,
        })

        res.status(200).json({
            message: "Message Received",
            data: newContact
        })
    }catch(error){
        res.status(500).json({ msg: "Server error" })
    }
})

export default router