const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
  } = require('../../controllers/thoughts-controller');
  
// Thought routes
router.get('/getThoughts', getAllThoughts);
router.get('/getThoughtById/:thoughtId', getThoughtById);
router.post('/createThought', createThought);
router.put('/:thoughtId', updateThought);
router.delete('/deleteThought/:thoughtId', deleteThought);
router.post('/thought/:thoughtId/reactions', addReaction);
router.delete('/thought/:thoughtId/reactions/:reactionId', removeReaction);

module.exports = router;
