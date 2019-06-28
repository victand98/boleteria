'use strict';
var models = require('../models/index');
var Cooperativa = models.cooperativa.model;
const uuidv4 = require('uuid/v4');
class CooperativaController {
    guardar(req, res) {
        if (req.body.external == 0) {
            Cooperativa.create({
                external_id: uuidv4(),
                nombre: req.body.nombre,
                numeroBuses: req.body.numeroBuses
            }).then(function (newCooperativa, created) {
                if (newCooperativa) {
                    console.log('Se guardo cooperativa............');
                    res.redirect('/cooperativa');
                    req.flash('info', 'Creación exitosa');
                }
            });
        } else {
            Cooperativa.update({
                nombre: req.body.nombre,
                numeroBuses: req.body.numeroBuses
            }, {where: {external_id: req.body.external}}).then(function (updatedcooperativa, created) {
                res.redirect('/cooperativa');
                if (updatedcooperativa) {
                    req.flash('info', 'Modificación éxitosa', false);
                    console.log('Se modifico cooperativa............');                }
            });
        }
    }
    verCoop(req, res) {
        console.log("********");
        Cooperativa.findAll({}).then(function (listaCoop) {
            res.render('index',
                    {titulo: "Cooperative",
                        fragmento: 'fragmentos/frmRegisterCoop',
                        lista: listaCoop
                    });
            }).catch(function (err) {
            console.log("Error:", err);
            res.redirect('/');
        });
    }
}
module.exports = CooperativaController;


