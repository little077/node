const express = require("express")
const app = express();
const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload/')
  },
  filename: function (req, file, cb) {
    // console.log(req,file)
    // cb(null,  '-' + Date.now()+".png")
    cb(null,file.originalname)
  }
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))
const upload = multer({ storage: storage })
const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 },
 { name: 'gallery', maxCount: 8 }])

app.post("/upload",cpUpload,(req,res,next)=>{
  console.log(req.files)
  res.end("文件上次成功")
})

app.post("/file",(req,res)=>{
  res.end("上传了")
})

app.listen(3000,()=>{
    console.log("端口启动了")
})