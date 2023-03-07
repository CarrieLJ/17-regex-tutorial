const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema ({
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    //use a getter method to format the timestamp on query
    createdAt: { type: Date, default: Date.now },
    username: { type: String, required: true },
    reactions: [{ type: Schema.Types.ObjectId, ref: 'reaction' }],
    //array of nested documents created with the reactionSchema
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;