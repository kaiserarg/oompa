const mongoose = require('mongoose');
const { Schema } = mongoose;



// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const UserSchema = new Schema({
  address: String,
  username: String,
});

const User = mongoose.model('User', UserSchema);

// Now you can create a new user
const newUser = new User({
  address: '0x123...',
  username: 'username',
});