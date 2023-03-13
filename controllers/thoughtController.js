const { Thought, User } = require('../models');

module.exports = {
  getThought(req, res) {
    Thought.find()
      .populate({ path: 'reactions', select: '-__v' })
      .then((thoughts) => res.json(thoughts))
      .catch((err) => {
        console.error({ message: err });
        return res.status(500).json(err);
      });
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .populate({ path: 'reactions', select: '-__v' })
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new thought
  createThought(req, res) {
    Thought.create(req.body)
    .then((thoughts) => {
      return User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: {thoughts: thoughts._id } },
        { new: true }
      )}
    )  
      .then((user) => {
        if (!user) {
          return res.status(404).json({ message: 'Thought created but no user with this id!' });
        }

        res.json({ message: 'Thought successfully created!' });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
    },

  //update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
      )
    .then((thoughts) =>
      !thoughts
        ? res.status(404).json({ message: 'No thought with that ID' })
        : res.json(users)
    )
    .catch((err) => res.status(500).json(err));
  },
  
    //add a reaction
    addReaction(req, res) {
      console.log('You are adding a reaction');
      console.log(req.body);
      Thought.findOneAndUpdate(
        { _id: req.params.reactionId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      )
        .then((reactions) =>
          !reactions
            ? res
                .status(404)
                .json({ message: 'No reaction found with that ID :(' })
            : res.json(reactions)
        )
        .catch((err) => res.status(500).json(err));
    },
  //remove a reaction
  removeReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.reactionId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((reactions) =>
        !reactions
          ? res
              .status(404)
              .json({ message: 'No reaction found with that ID :(' })
          : res.json(reactions)
      )
      .catch((err) => res.status(500).json(err));
  },

};