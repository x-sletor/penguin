var express = require('express');
var router = express.Router();
var {Todos} = require('../models/todos');
var {Cash} = require('../models/cashier');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const todos = await Todos.find();
  // (description:'going to the gym', complete)
  res.render('index');
});

/* page */
router.get('/material', function(req,res,next){
  res.render('material');
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
