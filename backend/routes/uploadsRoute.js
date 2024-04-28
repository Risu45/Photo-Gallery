const {Router}=require('express')
const uplodmidddleware = require('../middlewares/multermiddleware')
const uploadmodule = require('../module/uploadmodule')


const router=Router()

router.get("/api/get", async(req,res)=>{
    const allphotos=await uploadmodule.find().sort({createAt:"descending"})
    res.send(allphotos)
});

router.post("/api/save",uplodmidddleware.single("photo"),(req,res)=>{
const photo=req.file.filename


console.log(photo);

uploadmodule.create({photo})
.then((data)=>{
    console.log("uploades successfully...");
    console.log(data);
    res.send(data);
})
.catch((err)=>console.log(err));

})
module.exports=router;