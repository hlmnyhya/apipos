module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      "User",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        role: {
          type: DataTypes.ENUM,
          values: ["admin"],
          allowNull: false,
          defaultValue: "admin",
        },
        avatar: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        profession: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        createdAt: {
          field: "created_at",
          type: DataTypes.DATE,
        },
        updatedAt: {
          field: "updated_at",
          type: DataTypes.DATE,
        },
      },
      {
        tableName: "users",
        timeStapms: true,
      }
    );
    return User;
  };
  