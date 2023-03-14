const { Schema, Types } = require("mongoose");
const dateformat = require("../utils/dateformat");

const reactionSchema = new Schema({
  reactionId: 
    { type: Schema.Types.ObjectId, default: () => new TypesObjectId() },
  reactionBody: { type: String, required: true, maxlength: 280 },
  username: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateformat(timestamp),
  },
},
{
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
}
);

module.exports = reactionSchema;
