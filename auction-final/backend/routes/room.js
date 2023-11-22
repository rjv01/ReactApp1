const express = require('express');
const { body } = require('express-validator');
const roomController = require('../controllers/room');

const router = express.Router();

const isAuth = require('../middlewares/isAuth');


router.post('/join/:roomId', isAuth, roomController.joinRoom);


router.get('/:roomId', isAuth, roomController.getRoom);

module.exports = router;
