var express = require('express');
var bodyParser = require('body-parser');
var validator = require('express-validator');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var csrf = require('csurf');
var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(validator());
router.use(cookieParser());
router.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
router.use(csrf());

/* Contact us controller. */
router.post('/', function(req, res, next) {
    // console.log(req.body);
    req.assert('fullname', 'Full name is required').notEmpty();
    req.assert('message', 'Message is required').notEmpty();
    var errors = req.validationErrors();
    res.locals.csrfToken = req.csrfToken();
    if (errors) res.render('errorContact', { errors: errors });
    else {
        // req.session['fullname'] = req.body.fullname;
        res.redirect(307, '/thankyou');
    }
    // res.redirect(301, 'http://127.0.0.1:3000/thankyou');
    // res.render('contactusController', { title: 'Contact Us' });
});
module.exports = router;