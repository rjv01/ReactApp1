const express = require('express');
const { body } = require('express-validator');
const bidController = require('../controllers/bid');

const router = express.Router();

const isAuth = require('../middlewares/isAuth');

router.post('/:adId?', isAuth, bidController.addBid);
router.get('/:adId?', isAuth, bidController.listBids);

module.exports = router;
