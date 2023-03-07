const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema ({
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    //use a getter method to format the timestamp on query
    createAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    reactions: [{ type: Schema.Types.ObjectId, ref: 'thought' }],
    //array of nested documents created with the reactionSchema
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

//schema settings: create virtual called reactionCount that retreives the length of the thought's reactions array field on query
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;