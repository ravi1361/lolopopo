var express = require('express');
var router = express.Router();

const userModel = require("./users");


router.get("/", function(req,res){
  res.render("index");
})

router.get("/allusers", async function(req,res){
  let allusers = await userModel.findOne({username:"harsh"});
  res.send(allusers);
})



module.exports = router;
