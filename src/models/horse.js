import bcrypt from 'bcrypt';

const horse = (sequelize, DataTypes) => {
  const Horse = sequelize.define('horse', {
    horse_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    trainer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    },
    regular_jockey: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    },
    sire: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    },
    form: {
      type: DataTypes.STRING,
    },
    races: {
      type: DataTypes.STRING,
    },
    wins: {
      type: DataTypes.STRING,
    },
    places: {
      type: DataTypes.STRING,
    },
    win_percentage: {
      type: DataTypes.STRING,
    },
    place_percentage: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    distance: {
      type: DataTypes.STRING,
    },
    ground: {
      type: DataTypes.STRING,
    },
    track: {
      type: DataTypes.STRING,
    },
    comments: {
      type: DataTypes.STRING,
    },
    link: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.STRING,
    },
    updatedAt: {
      type: DataTypes.STRING,
    },
  });

  Horse.associate = models => {
    Horse.hasMany(models.Message, { onDelete: 'CASCADE' });
  };



  return Horse;
};

export default horse;
