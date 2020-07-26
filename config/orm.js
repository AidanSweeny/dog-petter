var connection = require("./connection.js");

var orm = {
  insertOne: function(dog_name, cb) {
    var queryString = "INSERT INTO dogs(dog_name, petted) VALUES (?, false)";
    connection.query(queryString, [dog_name], function(err, result) {
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
  updateOne: function(id, cb){
    var queryString = "UPDATE dogs SET petted = true WHERE id = ?";
    connection.query(queryString, [id], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  deleteOne: function(id, cb){
    var queryString = "DELETE FROM dogs WHERE id = ?";
    connection.query(queryString, [id], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
