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
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
    
    return Cooperativa;
};
