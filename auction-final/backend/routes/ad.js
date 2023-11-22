const express = require('express');
const { body } = require('express-validator');
const adController = require('../controllers/ad');

const router = express.Router();

const isAuth = require('../middlewares/isAuth');


router.post(
  '/',
  isAuth,
  [
    body('productName', 'Invalid productName').trim().not().isEmpty(),
    body('basePrice', 'Invalid basePrice').trim().isNumeric(),
    body('duration', 'Invalid duration').trim().isNumeric(),
  ],
  adController.addAd
);


router.get('/?', isAuth, adController.retrieveAds);

router.get('/:id', isAuth, adController.findAd);

router.put('/:id', isAuth, adController.updateAd);

router.delete('/:id', isAuth, adController.deleteAd);

module.exports = router;
