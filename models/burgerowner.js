module.exports = function(sequelize, DataTypes){
    return sequelize.define("burger_owner", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        ownerName: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

}