var express = require('express');
var router = express.Router();

const userModel = require("./users");


router.get("/", function(req,res){
  res.render("index");
})


router.get("/delete", async function (req,res){
  let deleteduser = await userModel.findOneAndDelete({
    username : "harsh"
  });
  res.send(deleteduser);
});



module.exports = router;
