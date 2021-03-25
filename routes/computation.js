var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    var randomNumber = Math.floor(Math.random() * 100 + 1);
    let input = req.query.x;    
    var number;
    if (input == undefined) {
        number = randomNumber;
    } else {
        number = input;
    }
    res.render('computation', { title: `Math function Math.cosh() of ${number} is ${Math.cosh(number)}` });
});

module.exports = router;
