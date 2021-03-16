var express = require('express');
// const { Todos } = require('../models/todos');
var router = express.Router();
var {Todos} = require('../models/todos');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const todos = await Todos.find();
  // (description:'going to the gym', complete)
  res.render('index', { title: 'Todos', todos: todos });
});

module.exports = router;
