const express = require("express")
const router = new express.Router();
const MenRanking = require("../models/schema")

router.get("/", (req, res)=>{
    res.send("Hello Hommieee")
})

router.post("/ranking",async(req, res) =>{
   try{
       const men = new MenRanking(req.body)
       const data = await men.save();
       res.send(data)
    } 
    catch(error){
        res.status(400).send(error)
    }
})

router.get("/ranking", async(req, res)=>{
    try {
        const men = await MenRanking.find().sort();
        res.send(men)
    } catch (error) {
        res.send(error)
    }
})

router.get("/ranking/:ranking", async(req, res)=>{
    try {
        const ranking = req.params.ranking
        const men = await MenRanking.find({
            ranking:ranking
        });
        res.send(men)
    } catch (error) {
        res.send(error)
    }
})

router.patch("/ranking/:id", async(req, res)=>{
    try {
        const _id = req.params.id
        const men = await MenRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.send(men)
    } catch (error) {
        res.send(error)
    }
})

router.delete("/ranking/:id", async(req, res)=>{
    try {
        const _id = req.params.id
        const men = await MenRanking.findByIdAndDelete(_id);
        res.send(men)
    } catch (error) {
        res.send(error)
    }
})



module.exports = router;