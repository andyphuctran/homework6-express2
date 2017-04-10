var express = require('express');
var router = express.Router();

/* Contact us page. */
router.get('/', function(req, res, next) {
    res.render('contactus', { title: 'Contact Us', csrfToken: req.csrfToken() });
    return next();
});

module.exports = router;