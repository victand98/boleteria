module.exports = function (sequelize, Sequelize) {
    var Ticket = sequelize.define('Ticket', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        dni: {
            type: Sequelize.STRING(13)
        },
        nombreCliente: {
            type: Sequelize.STRING(50)
        },
        nroAsiento: {
            type: Sequelize.STRING(5)
        },
        valor: {
            type: Sequelize.DOUBLE
        }
    }, {
            freezeTableName: true,
            timestamps: false
        });
    return Ticket;
};