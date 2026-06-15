var express = require('express');
var router = express.Router();



router.get("/", function(req,res){
  req.session.ban = true ;
  res.render("index");
})


router.get("/checkban", function(req,res){
  console.log(req.session);
  res.send("check kiya hai console dekho");
  
})



module.exports = router;
