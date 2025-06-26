import express from "express";
const router=express.Router();

router.get("/",getAllNotes)
router.put("/:id",(req,res)=>{
    res.status(201).json({message:"Note Created successfully"})
})

export default router;