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
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    places: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    amount: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    to_return: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    }
  });

  Bet.associate = models => {
    Bet.hasMany(models.Message, { onDelete: 'CASCADE' });
  };

  Bet.findById = async (id) => {
    let bet = await Bet.findOne({
      where: { id },
    });

    if (!bet) {
      return 'Error: Could not find bet by id';
    }

    return bet;
  };



  return Bet;
};

export default bet;
