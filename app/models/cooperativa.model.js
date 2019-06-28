module.exports = function (sequelize, Sequelize) {
    var Cooperativa = sequelize.define('cooperativa', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        nombre: {
            type: Sequelize.STRING(60)
        },
        numeroBuses: {
            type: Sequelize.STRING(5)
        },
        external_id: {
            type: Sequelize.UUID
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
    
    return Cooperativa;
};
