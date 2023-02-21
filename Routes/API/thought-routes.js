const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thought-controller');
  
// Thought routes
router.get('/thoughts', getAllThoughts);
router.get('/thoughts/:thoughtId', getThoughtById);
router.post('/thoughts', createThought);
router.put('/thoughts/:thoughtId', updateThought);
router.delete('/thoughts/:thoughtId', deleteThought);
router.post('/thoughts/:thoughtId/reactions', addReaction);
router.delete('/thoughts/:thoughtId/reactions/:reactionId', removeReaction);

module.exports = router;
