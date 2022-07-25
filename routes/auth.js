var express = require('express');
var router = express.Router();
const validationCheck = require('../validation');
const { registerValidator, loginValidator } = require('../validation/auth');

const {Users} = require('../models');
const { guest } = require('../middlewares/auth');


router.get('/register', guest, function(req, res, next) {
  res.render('register');
});

router.post('/register', guest, registerValidator, async function(req, res, next) {
  validationCheck(req, res, async function(){
      try {
        const {username, password} = req.body
        const user = await Users.create({username, password})
        req.flash('message', `Dear ${user.username}, You are welcome to our website`)
        return res.redirect('/login')
      } catch (error) {
        req.flash('error', 'Account failed to create. Please try again later')
        res.redirect('back')
      }
  })
});


router.get('/login', guest, function(req, res){
  res.render('login')
})

router.post('/login', guest, loginValidator, async function(req, res){
    validationCheck(req, res, async function(){
       try {
          const {username, password} = req.body
          const user = await Users.findOne({where: {'username': username}})

          if(!user || !user.checkPassword(password)){
            req.flash('error', "invalid credentials")
            return res.redirect('back')
          }

          req.flash('message', `Welcome ${user.username}`)
          req.session.user = user
          return res.redirect('/dashboard')

       } catch (error) {
          req.flash('error', 'Login failed. Please try again later')
          res.redirect('back')
       }
    })
})

module.exports = router;
