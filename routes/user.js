/**
 * Created by MANO on 2016.11.25.
 */

var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var csrfProtection = csrfProtection = csrf();
router.use(csrfProtection);


router.get('/signup', function(res, req, next){
    var messages = req.flash('error');
    res.render('/signup', {csrfToken: req.csrfToken(), messages: messages, hasErros: messages.length > 0});


});

router.post('/signup', passport.authenticate('local.signup',{
    succesRedirect: 'user/profile',
    failureRedirect: 'user/signup',
    failureFlash: true
}));

router.get('/profile', function(req, res, next){
    res.render('/profile');
});

router.get('/signin', function(req, res, next){
    var messages = req.flash('error');
    res.render('/signin', {csrfToken: req.csrfToken(), messages: messages, hasErros: messages.length > 0});
});

router.post('/signin', passport.authenticate('local.signin', {
    succesRedirect: 'user/profile',
    failureRedirect: 'user/signin',
    failureFlash: true
}));

module.exports = router;

function isLoggedIn(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
}