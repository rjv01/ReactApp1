const express = require('express');
const { body } = require('express-validator');
const auctionController = require('../controllers/auction');

const router = express.Router();

const isAuth = require('../middlewares/isAuth');


router.get('/start/:adId', isAuth, auctionController.startAuction);


module.exports = router;
