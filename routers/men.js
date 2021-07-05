const express = require('express');

const router =new express.Router();

const MensRanking =require("../models/mens");

//we will handle post req

router.post("/mens",async(req,res)=>{
    try {
       const addingMensRecords= new MensRanking(req.body)
       console.log(req.body);
      const insertMens =await addingMensRecords.save()
      res.status(201).send(insertMens);
    } catch (e) {
        res.status(400).send(e);
    }
})

// finds 

router.get("/mens",async(req,res)=>{
    try {
      const getMens = await MensRanking.find({}).sort({"ranking":1});
      res.send(getMens);
    } catch (e) {
        res.status(400).send(e);
    }
})


//we will handle get req of 

router.get("/mens/:id",async(req,res)=>{
    try {
        const _id =req.params.id
        const getMen = await MensRanking.findById(_id);
        res.send(getMen);
    } catch (e) {
        res.status(400).send(e);
    }
})


// we will update
router.patch("/mens/:id",async(req,res)=>{
    try {
        const _id =req.params.id
        const patchUpdate = await MensRanking.findByIdAndUpdate(_id,req.body,{new:true});
        res.send(patchUpdate);
    } catch (e) {
        res.status(500).send(e);
    }
})

// we will delete
router.delete("/mens/:id",async(req,res)=>{
    try {
        const _id =req.params.id
        const patchDelete = await MensRanking.findByIdAndDelete(_id);
        res.send(patchDelete);
    } catch (e) {
        res.status(500).send(e);
    }
})



module.exports= router;