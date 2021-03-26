
const express = require('express');
const { getByUsername, authenticate,register,getAll,getCurrent,getById,update,remove} = require('../controllers/UserController');
const router = express.Router();

// routes
router.post('/authenticate', authenticate);
router.post('/register', register);
router.get('/', getAll);
router.get('/current', getCurrent);
router.get('/:id', getById);
router.get('/getusername/:username', getByUsername);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;