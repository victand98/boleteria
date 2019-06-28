'use strict';
var models = require('./../models/index');
var Bus = models.bus;
var Cooperativa = models.cooperativa.model;
const uuidv4 = require('uuid/v4');
class BusController {
    verBus(req, res) {
        console.log('...........');
        Bus.findAll({}).then(function (buses) {
            //console.log('...........' + buses);
            res.render('index', {
                title: "Administracion de Bus",
                fragmento: 'fragmentos/frmRegisterBus',
                listaB: buses
            });
        }).catch(function (err) {
            console.log("Error:", err);
            res.redirect('/');
        });
        ;

    }
    guardar(req, res) {
        if (req.body.external == 0) {
            Bus.create({
                external_id: uuidv4(),
                numeroAsientos: req.body.asientos,
                numeroBus: req.body.numeroBus
            }).then(function (newBus, created) {
                if (newBus) {
                    console.log('Se guardo bus............');
                    res.redirect('/bus');
                    req.flash('info', 'Creación exitosa');
                }
            });
        } else {
            Bus.update({
                numeroAsientos: req.body.asientos,
                numeroBus: req.body.numeroBus
            }, {where: {external_id: req.body.external}}).then(function (busupdate, created) {
                res.redirect('/bus');
                if (busupdate) {
                    req.flash('info', 'Modificación éxitosa', false);
                    console.log('Se modifico bus............');                }
            });
        }
    }
}
module.exports = BusController;

