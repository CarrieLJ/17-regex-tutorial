const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema ({
    //use mongoose's objectId data type
    reactionId: [{ type: Schema.Types.ObjectId, default: new ObjectId }],
    //default value is set to a new ObjectId
    reactionBody: { type: String, required: true, maxlength: 280 },
    username: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    //use a getter method to format the timestamp on query
});

//schema settings: this will not be a model, but rather will be used as the reaction field's subdocument schema in the Thought model
reactionSchema.virtual('getReactions').get(function () {
    return 'count: ${this.count}';
});

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;
