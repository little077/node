const express = require("express")
const {router} = require("./router")

const app = express()

app.use("/router",router)

app.listen("3000",()=>{
    console.log("3000端口启动")
})