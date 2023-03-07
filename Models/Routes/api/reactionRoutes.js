const router = require('express').Router();
const {
  getReactions,
  getSingleReaction,
  createReaction,
} = require('../reactionController');

// /api/reactions
router.route('/').get(getReactions).post(createReaction);

// /api/tags/:tagId
router.route('/:reactionId').get(getSingleReaction);

module.exports = router;
