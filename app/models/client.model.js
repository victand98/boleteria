module.exports = function (sequelize, Sequelize) {
    var Client = sequelize.define('Client', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        nombre: {
            type: Sequelize.STRING(50)
        },
        dni: {
            type: Sequelize.STRING(13)
        }
    }, {
            freezeTableName: true,
            timestamps: false
        });
    return Client;
};