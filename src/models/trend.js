import bcrypt from 'bcrypt';

const trend = (sequelize, DataTypes) => {
  const Trend = sequelize.define('trend', {
    race_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    trend_: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    },
    sentiment: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    },
  });

  Trend.associate = models => {
    Trend.hasMany(models.Message, { onDelete: 'CASCADE' });
  };


  Trend.findById = async id => {
    let trend = await Trend.findOne({
      where: { id },
    });
    return trend;
  };



  return Trend;
};

export default trend;
