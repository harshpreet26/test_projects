const mongoose = require("mongoose");

// Creating a user schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, min: 7, max: 120 },
});

const User = mongoose.model("User", userSchema);

//Controller functions for user operations
exports.createUser = async (firstName, email, password, age) => {
  try {
    const newUser = new User({ firstName, email, password, age });
    await newUser.save();
  } catch (error) {
    throw new Error("Error creating user: " + error.message);
  }
};

//not needed: module.exports = {};