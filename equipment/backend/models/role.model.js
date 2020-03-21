var mongoose = require("mongoose");

//create Schema
var roleSchema = new mongoose.Schema({
  name: String,
}, {
  collection: 'roles'
})

// create models
var Role = mongoose.model("Role", roleSchema);

module.exports = Role;