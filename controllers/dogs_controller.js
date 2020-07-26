var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var dog = require("../models/dogs.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  dog.selectAll(function(data) {
      console.log(data)
    res.render("index", {dogs : data});
  });
});

router.post("/api/dogs", function(req, res) {
    console.log(req.body.name);
  dog.insertOne(req.body.name
  , function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/dogs/:id", function(req, res) {
  dog.updateOne(req.params.id, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/dogs/:id", function(req, res) {
  dog.deleteOne(req.params.id, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
