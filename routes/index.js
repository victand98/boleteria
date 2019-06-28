var express = require('express');
var app = express.Router();

var cooperativa = require('../app/controllers/CooperativaController');
var CooperativaController = new cooperativa();

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.post('/guardar_coop',CooperativaController.guardar);
app.get('/cooperativa', CooperativaController.verCoop);


module.exports = app;
