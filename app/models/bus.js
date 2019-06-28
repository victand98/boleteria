module.exports = function (sequelize, Sequelize) {
//    var cooperativa = require('../models/cooperativa');
//    var Cooperativa = new cooperativa(sequelize, Sequelize);   
    var Bus = sequelize.define('bus', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        external_id: {
            type: Sequelize.UUID
        },
        numeroAsientos: {
            type: Sequelize.INTEGER
        }, 
        numeroBus: {
            type: Sequelize.INTEGER
        }
    }, {freezeTableName: true,
        createdAt: 'fecha_registro',
        updatedAt: 'fecha_modificacion'
    });
    
//    Bus.associate = function (models) {
//        models.bus.hasMany(models.horario, {
//            foreignKey: 'id_bus'
//        });
//    };
    
//    Bus.belongsTo(Cooperativa, {
//        foreignKey: 'id_cooperativa'
//    });
 
 
    return Bus;
};


