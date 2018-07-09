module.exports = (sequelize, DataTypes) => {
    const Teams = sequelize.define('team', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        teamowner: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
    return Teams;
}