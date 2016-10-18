var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Poop' });
});

router.get('/about', function (req, res, next){
  var self = {
    name: 'sonia',
    phone: '283-382-4859',
    email: 'baller@gmail.com'
  };
  // response.render() has two arguments
  // 1: template (view)
  // 2: an Object with data
  res.render('about', self)
});

router.get('/faqs', function(req, res, next){
  var questions = {
    questions: ['do you like bass?', 'want a burrito?', 'sleeps?'],
    answers: ['yas', 'yaas', 'yaaas']
  };
  res.render('faqs', questions)
});

router.get('/login', function(req, res, next){
  var user = {
    name: 'jim',
    password: 'banjo',
    hint: 'strovia'
  };
  res.render('login', user)
});

module.exports = router;
