var express = require('express');
const { auth } = require('../middlewares/auth');
const {Product}  = require('../models')
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index')
});


/* GET users listing. */
router.get('/dashboard', auth, async function(req, res, next) {
  const products = await Product.findAll();
  res.render('dashboard', {products})
});

/* GET users listing. */
router.post('/logout', auth, function(req, res, next) {
  req.flash('message', 'Thanks for visiting')
  req.session.user = null
  res.redirect('/login')
});

module.exports = router;
