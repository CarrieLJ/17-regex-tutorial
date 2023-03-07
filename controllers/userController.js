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
      .then((user) => res.json(user))
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
  //addFriend
    addFriend(req, res) {
      console.log('You are adding a friend');
      console.log(req.body);
      User.findOneAndUpdate(
        { _id: req.params.friendId },
        { $addToSet: { friends: req.body } },
        { runValidators: true, new: true }
      )
        .then((friends) =>
          !friends
            ? res
                .status(404)
                .json({ message: 'No friend found with that ID :(' })
            : res.json(friends)
        )
        .catch((err) => res.status(500).json(err));
    },
  //remove a friend
  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.friendId },
      { $pull: { friends: { friendId: req.params.friendId } } },
      { runValidators: true, new: true }
    )
      .then((friends) =>
        !friends
          ? res
              .status(404)
              .json({ message: 'No friend found with that ID :(' })
          : res.json(friends)
      )
      .catch((err) => res.status(500).json(err));
  },
};
