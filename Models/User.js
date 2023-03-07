const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
    username: { type: String, required: true, unique: true, trim: true },
    //need to add matching validation
    email: { type: String, required: true, unique: true, match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought', }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'User', }],
},
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

//schema settings: create virtual called friendCount that retreives the length of the user's friends array field on query
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;