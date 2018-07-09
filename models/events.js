module.exports = function (sequelize, DataTypes) {
    const TEvent = sequelize.define('tevent', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: DataTypes.STRING,
        teams: DataTypes.INTEGER
    });
    return TEvent
};