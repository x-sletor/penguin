// connection to mongodb
const mongoose = require('mongoose')
mongoose.connect('mongodb://mongodb:27017/mama', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'CONNECTION ERROR'))
db.once('open', function(){
  // we're connection
  console.log('connected');
})
