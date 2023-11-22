const express = require('express');
const { body } = require('express-validator');

const authController = require('../controllers/auth');
const isAuth = require('../middlewares/isAuth');

const router = express.Router();


router.post(
  '/',
  [
    body('email', 'Invalid credentials').isEmail().trim(),
    body('password', 'Invalid credentials').exists().trim(),
  ],
  authController.login
);

router.get('/', isAuth, authController.getUser);
module.exports = router;
