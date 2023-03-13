const { Schema, Types } = require('mongoose');
const dateformat = require('../utils/dateformat')

const reactionSchema = new Schema ({
    //use mongoose's objectId data type
    reactionId: [{ type: Schema.Types.ObjectId, default: () => new TypesObjectId() }],
    //default value is set to a new ObjectId
    reactionBody: { type: String, required: true, maxlength: 280 },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, get: timestamp => dateformat(timestamp) },
    //use a getter method to format the timestamp on query
    toJSON: { getters: true, id: false }
});


//schema settings: this will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model

module.exports = reactionSchema;
