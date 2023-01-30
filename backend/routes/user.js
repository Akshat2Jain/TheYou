const router=require("express").Router();

router.get("/userget",(req,res)=>{
    res.send("usertest is successfull")
})


router.post("/userpost",(req,res)=>{
    const username=req.body.username;
    // const password=req.body.password;
    console.log(username);
    res.send("Your username has been created with name: "+ username)

})

module.exports=router
