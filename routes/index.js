var express = require('express');
var router = express.Router();



router.get("/", function(req,res){
  res.cookie("name","ravi");
  res.render("index");
})

router.get("/read", function(req,res){
 console.log(req.cookies.name);
 res.send("check");
});

router.get("/delete", function(req,res){
 res.clearCookie("name");
 res.send("clear hogayi");
});






module.exports = router;
