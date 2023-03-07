const router = require('express').Router();
const userRoutes = require('./userRoutes');
const reactionRoutes = require('./reactionRoutes');

router.use('/users', userRoutes);
router.use('/reactions', reactionRoutes);

module.exports = router;
