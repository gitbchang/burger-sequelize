var express = require("express");
var router = express.Router();

//import the model (burger.js) to use its database functions
// var burger = require("../models/burger.js");
var db = require("../models");

router.get("/", function(req, res){
    // burger.findAll(function(data){
    //     var burgerObject = {
    //         burgs: data
    //     };

    //     res.render("index", burgerObject);
    // });    

    db.burgers.findAll({})
      .then(function(result){
        var burgerObject = {
          burgs: result
        }

        res.render("index", burgerObject);
      });
});

router.post("/", function(req, res){
    burger.create(req.body.addBurger, function(){
        res.redirect("/");
        console.log(res);
    });
});

router.put("/:id", function(req, res){
    burger.update(req.params.id, function(){
        res.redirect("/");
        console.log(res);
    });
});


module.exports = router;