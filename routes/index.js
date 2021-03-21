var express = require('express');
var router = express.Router();
var {Todos} = require('../models/todos');

const home = (req, res, next) => {
  if (!req.session.user) {
      return res.redirect('/index')
          //return res.redirect('/index')
  }
  next()
}

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index', { title: 'Express', user: req.session.user });
});

/* page */
router.get('/cashier', home, function(req,res,next){
  res.render('cashier');
});

module.exports = router;
