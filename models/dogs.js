// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var dog = {
  insertOne: function(dog_name, petted, cb) {
    orm.insertOne(dog_name, petted, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  updateOne: function(petted, dog_name, cb) {
    orm.updateOne(petted, dog_name, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = dog;
