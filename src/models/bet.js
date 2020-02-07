import bcrypt from 'bcrypt';

const bet = (sequelize, DataTypes) => {
  const Bet = sequelize.define('bet', {
    race_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    horse_name: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    amount: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });

  Bet.associate = models => {
    Bet.hasMany(models.Message, { onDelete: 'CASCADE' });
  };

  Bet.findByNames = async (race_name, horse_name) => {
    let bet = await Bet.findOne({
      where: { race_name, horse_name },
    });

    if (!bet) {
      return 'Error: Could not find bet by names';
    }

    return bet;
  };



  return Bet;
};

export default bet;
