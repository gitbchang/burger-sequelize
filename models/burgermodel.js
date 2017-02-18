
/*
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("todo", {
    text: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [1, 255]
      }
    },
    complete: DataTypes.BOOLEAN
  });
  return Todo;
};
*/

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
        }
    });
    return burger;
}