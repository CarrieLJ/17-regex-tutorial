const { Thought } = require('../models');

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
    Thought.findOne({ _id: req.params.userId })
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
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  //update a thought
  updateThought(req, res) {
    Thought.updateOne({ _id: req.params.userId })
    .populate({ path: 'reactions', select: '-__v' })
    .then((thoughts) =>
      !thoughts
        ? res.status(404).json({ message: 'No thought with that ID' })
        : res.json(users)
    )
    .catch((err) => res.status(500).json(err));
  },
};