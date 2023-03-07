const router = require('express').Router();
const {
  getSingleThought,
  getThought,
  createThought,
  updateThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');
// /api/thoughts = endpoint

router.route('/').get(getThought).post(createThought);
// /api/thoughts/:thoughtId = endpoint

router.route('/:thoughtId').get(getSingleThought).put(updateThought);
// /api/thought/:thoughtId/reactions = endpoint

router.route('/:thoughtId/reactions').post(addReaction);
// /api/thought/:thoughtId/reactions/:reactionId = endpoint

router.route('/thought/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;