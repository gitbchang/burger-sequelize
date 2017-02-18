// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Burger = require("../models/burgermodel.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all burgers
  app.get("/api/all", function(req, res) {
      Burger.findAll({})
      .then(function(result){
        return res.json(result);
      });
  });



};
