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

router.get("/",async(req,res)=>{
    try{
        const contacts = await Contact.find().sort({createdAt: -1})

         res.status(200).json(contacts);
    }catch (error) {
    res.status(500).json({ msg: "Error fetching contacts" });
  }
})

router.delete('/:id',async(req,res)=>{
    try{
        await Contact.findByIdAndDelete(req.params.id)

        res.status(200).json({ msg: "Contact deleted" });
    }catch(err){
        res.status(500).json({
            message:"error deleting contact"
        })
    }
})

export default router