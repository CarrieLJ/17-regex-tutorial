const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
//add this into utils-look at activities
const format_date = require('../utils/dateformat')

const thoughtSchema = new Schema ({
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280 },
    //use a getter method to format the timestamp on query: run date format
    createdAt: { type: Date, default: Date.now, get: timestamp => format_date(timestamp) },
    username: { type: String, required: true },
    reactions: [reactionSchema],
},
    {
        toJSON: {
            getters: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;