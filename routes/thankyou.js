var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
// router.use()
/* Thankyou page. */
router.post('/', function(req, res, next) {
    var fullname = req.body.fullname;
    console.log(fullname);
    res.render('thankyou', { fullname: fullname });
});

module.exports = router;