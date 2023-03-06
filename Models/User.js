const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    //need to add in unique and trimmed
    username: { type: String, required: true },
    //need to add in unique and matching validation
    email: { type: String, required: true },
    //reference thought model: thoughts: { array: },
    //reference User model: friends; {}
});

//schema settings: create virtual called friendCount that retreives the length of the user's friends array field on query

module.exports = User;