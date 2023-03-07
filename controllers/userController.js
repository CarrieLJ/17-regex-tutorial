const { User } = require('../models');

module.exports = {
  getUsers(req, res) {
    User.find()
      .populate({ path: 'reactions', select: '-__v' })
      .then((users) => res.json(users))
      .catch((err) => {
        console.error({ message: err });
        return res.status(500).json(err);
      });
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate({ path: 'reactions', select: '-__v' })
      .then((users) =>
        !users
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(users)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  //update a user
  updateUser(req, res) {
    User.updateOne({ _id: req.params.userId })
    .populate({ path: 'reactions', select: '-__v' })
    .then((users) =>
      !users
        ? res.status(404).json({ message: 'No user with that ID' })
        : res.json(users)
    )
    .catch((err) => res.status(500).json(err));
  },
};
