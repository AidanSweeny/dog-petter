var connection = require("./connection.js");

var orm = {
  insertOne: function(dog_name, petted, cb) {
    var queryString = "INSERT INTO dogs(dog_name, petted) VALUES (?, ?)";
    connection.query(queryString, [dog_name, petted], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  selectAll: function(cb) {
    var queryString = "SELECT * FROM dogs";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(petted, dog_name){
    var queryString = "UPDATE dogs SET petted = ? WHERE ?";
    connection.query(queryString, [petted, dog_name], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
