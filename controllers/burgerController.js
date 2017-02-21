var express = require("express");
var router = express.Router();

//import the model (burger.js) to use its database functions
// var burger = require("../models/burger.js");
var db = require("../models");

router.get("/", function(req, res){
    // include: [db.burger_owner]
    db.burgers.findAll({include: [db.burger_owner]})
      .then(function(result){
        var burgerObject = {
          burgs: result          
        };

        res.render("index", burgerObject);
      });
});

router.post("/", function(req, res){

    var newBurger = {
        burger_name: req.body.addBurger,
        
    };
    db.burgers.create(newBurger).then(function(result){
        // if you res.json the result, it will redirect and show the newBurger's json object
        // res.json(result);
        res.redirect("/");
        // console.log(result);
    });
});

// Listen for devour update
router.post("/api/:id", function(req, res){
    db.burgers.update({
        devoured: 1
    },
    {

        where: {
            id: req.params.id
        }
    }).then(function(dbPost){
        // console.log(dbPost);
        res.redirect("/");
    });

});

// Listen for burger owner
router.post("/api/owner/:id", function(req, res){
    var newBurgOwner = {
        ownerName: req.body.name,
        burgerId: req.params.id
    }
    db.burger_owner.create(newBurgOwner).then(function(result){
        res.json("Owner has been updated");
    })
})


module.exports = router;