var express = require('express');
const { auth } = require('../middlewares/auth');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index')
});


/* GET users listing. */
router.get('/dashboard', auth, function(req, res, next) {
  res.render('dashboard')
});

/* GET users listing. */
router.post('/logout', auth, function(req, res, next) {
  req.flash('message', 'Thanks for visiting')
  req.session.user = null
  res.redirect('/login')
});

module.exports = router;
