'use strict';
var models = require('./../models');
var Bus = models.bus;
class BusController{
    verBus(req, res){
        Bus.findAll({}).then(function (buses) {
            req.render('index',{
                title: "Administracion de Bus",
                fragmento: 'fragmentos/frmRegisterBus'
            });
        });
        
    }
}
module.exports = BusController;

