var express = require('express');
var router = express.Router();
var {Homes} = require('../models/homes');


/* GET home page. */
router.get('/', async function(req, res, next) {
  const homes = await Homes.find();
  // (description:'going to the gym', complete)
  res.render('index', { title: 'Mama Penguin', homes: homes });
});

/* page */
router.get('/ingredient', function(req,res,next){
  res.render('ingredient');
});

router.get('/menu', function(req,res,next){
  res.render('menu');
});

router.get('/cashier', function(req,res,next){
  /* const cash = await Cash.find(); */
  res.render('cashier', {title: 'Cashier', cash: cash});
});

router.get('/order', function(req,res,next){
  res.render('order');
});

router.get('/delivery', function(req,res,next){
  res.render('delivery');
});


module.exports = router;
