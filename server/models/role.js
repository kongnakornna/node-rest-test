module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "role",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
      },
      authorization: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      }
    },
    {
      tableName: "role"
    }
  );
};
