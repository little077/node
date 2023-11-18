const express = require("express")


const router = express.Router()


router.get("/",(req,res)=>{
    res.json({name:"yuan"})
})

router.get("/link",(req,res)=>{
    res.json({age:18})
})



module.exports = {
    router
}