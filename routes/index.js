var express = require('express');
var app = express.Router();

var cooperativa = require('../app/controllers/CooperativaController');
var CooperativaController = new cooperativa();

var bus = require('../app/controllers/BusController');
var BusController = new bus();

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', fragmento: 'fragmentos/principal' });
});

app.post('/guardar_coop',CooperativaController.guardar);
app.get('/cooperativa', CooperativaController.verCoop);

app.get('/bus', BusController.verBus);
app.post('/guardar_bus',BusController.guardar);

module.exports = app;
