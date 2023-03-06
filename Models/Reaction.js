const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema ({
    //use mongoose's objectId data type
    reactionId: { type: Object },
    //default value is set to a new ObjectId
    reactionBody: { type: String, required: true },
    //max characters 280
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    //use a getter method to format the timestamp on query
});

//schema settings: this will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model


module.exports = Reaction;
