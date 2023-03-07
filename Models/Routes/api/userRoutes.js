const router = require('express').Router();
const {
  getSingleThought,
  getThoughts,
  createThoughts,
} = require('../userController');

router.route('/').get(getThoughts).post(createThoughts);

router.route('/:userId').get(getSingleThought);

module.exports = router;
