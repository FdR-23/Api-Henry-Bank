const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define(
    'LockedStake',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      transactionType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      roi: {
        type: DataTypes.STRING,
      },
      parking: {
        type: DataTypes.STRING,
      },
      deposit: {
        type: DataTypes.DECIMAL,
      },
      end_date: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamp: true,
      createdAt: 'start_date',
      updatedAt: false,
    }
  );
};
