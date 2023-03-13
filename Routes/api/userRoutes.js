const router = require('express').Router();
const {
  getSingleUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser);
//endpoint: /api/users

router.route('/:userId').get(getSingleUser).delete(deleteUser);


router.route('/users/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;
