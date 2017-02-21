
module.exports = function(sequelize, DataTypes){
    var burger = sequelize.define("burgers", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        }, 
        burger_name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
                len: [1, 255]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
    },
    {
        timestamps: true
    }
    ); 
    // ,{
    //     classMethods: {
    //         associate: function(models){
    //             models.burgers.hasOne(models.burger_owner);
    //             models.burger_owner.belongsTo(models.burgers);
    //         }
    //     }
    // });
    return burger;
};