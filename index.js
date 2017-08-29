const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/school');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
app.use('/api',routes);
app.use(function(err,req,res,next){
  res.status(422).send({err: err.message});
});
app.listen(process.env.port || 5000,function(req,res){
  console.log('Express.js App Running!');
});
