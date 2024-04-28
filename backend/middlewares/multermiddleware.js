const multer=require("multer")
const {v4:uuidv4}=require("uuid")
const path=require("path")


const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./public/uploads")
    },
    filename:function(req,file,cb){
        cb(null,`${uuidv4()}_${path.extname(file.originalname)}`);
    },
});

const filefilter=(req,file,cb)=>{
    const allowedFileType=["image/jpeg","image/jpeg","image/png"]
    if(allowedFileType.includes(file.mimetype)){
        cb(null,true)
    }else{
        cb(null,false)
    }
}

const uplodmidddleware=multer({storage,filefilter})
module.exports=uplodmidddleware;