const express = require('express');
const router = express.Router();
const { getUserData, getUsersData, newUserData, newUserDataPUT, newUserDataPATCH, deleteUser } = require('../controllers/user')
const { userValidator, validate } = require('../middlewares/validator');

//Routes
router.get('/', (req, res) => {
    res.send('<h1>HOME</h1>')
})
router.get('/api/:id/user', getUserData);
router.get('/api/user', getUsersData);
router.post('/api/user', userValidator, validate, newUserData);
router.put('/api/user', userValidator, validate, newUserDataPUT);
router.patch('/api/user', userValidator, validate, newUserDataPATCH);
router.delete('/api/user', deleteUser);

module.exports = router;