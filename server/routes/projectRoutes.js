import express from 'express'
const router = express.Router();

router.get("/",(req,res)=>{
    res.json([
        {title: "Finance Dashboard", description: "Track expenses" }
    ])
})

export default router;