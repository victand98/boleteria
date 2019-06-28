module.exports = function (sequelize, Sequelize) {
    var Horario = sequelize.define('Horario', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        lugarOrigen: {
            type: Sequelize.STRING(13)
        },
        lugarDestino : {
            type: Sequelize.STRING(50)
        },
//        horaSalida: {
//            type: Sequelize.TIME
//        },
        fechaSalida: {
            type: Sequelize.DATE
        }
    },
    {
            freezeTableName: true,
            timestamps: false
        });
    return Horario;
    
};




