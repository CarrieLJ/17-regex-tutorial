const router = require('express').Router();
const {
  getSingleUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('../userController');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser);

router.route('/').put(updateUser);

router.route('/').delete(deleteUser);

//bonus: remove a user's associated thoughts when deleted


module.exports = router;
