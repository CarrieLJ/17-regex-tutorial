const router = require('express').Router();
const {
  getSingleThought,
  getThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../thoughtController');

router.route('/').get(getThought).post(createThought);

router.route('/:thoughtId').get(getSingleThought);

router.route('/').put(updateThought);

router.route('/').delete(deleteThought);

module.exports = router;