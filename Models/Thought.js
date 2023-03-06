const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema ({
    //need to be between 1-280 characters
    thoughtText: { type: String, required: true },
    //use a getter method to format the timestamp on query
    createAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    //add in reactions(like replies) reactions: {},
    //array of nested documents created with the reactionSchema
});

//schema settings: create virtual called reactionCount that retreives the length of the thought's reactions array field on query


module.exports = Thought;