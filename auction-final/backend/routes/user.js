const express = require('express');
const { body } = require('express-validator');
const userController = require('../controllers/user');

const router = express.Router();

const isAuth = require('../middlewares/isAuth');

router.post(
  '/',
  [
    body('username', 'Invalid name').trim().not().isEmpty(),
    body('email', 'Invalid email').trim().isEmail(),
    body('password', 'Enter valid password with min length of 6 char')
      .trim()
      .isLength({ min: 6 }),
  ],
  userController.registerUser
);

router.get('/:id', isAuth, userController.getUserById);
router.get('/products/purchased', isAuth, userController.purchasedProducts);
router.get('/products/posted', isAuth, userController.postedProducts);

module.exports = router;
