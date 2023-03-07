// const { User, Reaction } = require('../models');

// module.exports = {
//   getReactions(req, res) {
//     Reactions.find({})
//       .select('-__v')
//       .then((reactions) => res.json(reactions))
//       .catch((err) => res.status(500).json(err));
//   },
//   getSingleReaction(req, res) {
//     Reactions.findOne({ _id: req.params.reactionId })
//       .select('-__v')
//       .then((reaction) =>
//         !reaction
//           ? res.status(404).json({ message: 'No reaction with that ID' })
//           : res.json(reaction)
//       )
//       .catch((err) => res.status(500).json(err));
//   },
//   // create a new tag
//   createReaction(req, res) {
//     Reactions.create(req.body)
//       .then((reaction) => {
//         return Reaction.findOneAndUpdate(
//           { _id: req.body.userId },
//           { $addToSet: { reactions: reaction._id } },
//           { new: true }
//         );
//       })
//       .then((user) =>
//         !user
//           ? res
//               .status(404)
//               .json({ message: 'Reaction created, but found no thought with that ID' })
//           : res.json('Created the reaction 🎉')
//       )
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       });
//   },
// };
