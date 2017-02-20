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
    },
        {
        classMethods: {
            associate: function(models){
                models.burgers.hasOne(models.burger_owner);
                models.burger_owner.belongsTo(models.burgers);
            }
        }
    });

}