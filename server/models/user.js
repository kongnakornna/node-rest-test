module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      surname: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      password: {
        type: DataTypes.STRING(45),
        allowNull: false,
        defaultValue: ""
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        defaultValue: "",
        unique: true
      },
      role_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "role",
          key: "id"
        }
      },
      phone: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      description: {
        type: DataTypes.STRING(255),
        allowNull: true
      }
    },
    {
      tableName: "user"
    }
  );
};
