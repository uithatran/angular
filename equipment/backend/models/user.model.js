var mongoose = require('mongoose');

//create Schema
var userSchema = new mongoose.Schema({
  name: {type: String, trim: true, required: true},
  email: {type: String, trim: true, unique: true, required: true},
  password: {type: String, required: true},
  phone: {type: String, trim: true, required: true},
  position: {type: String},
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role"
    }
  ]
}, {
  collection: 'users'
});

// create models
var User = mongoose.model('User',userSchema);

module.exports = User;