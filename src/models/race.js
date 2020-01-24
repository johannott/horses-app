import bcrypt from 'bcrypt';

const race = (sequelize, DataTypes) => {
  const Race = sequelize.define('race', {
    race_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    race_fullname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    },
    grade: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    distance: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    },
    course: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    },
    age_limit: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    }
  });

  Race.associate = models => {
    Race.hasMany(models.Message, { onDelete: 'CASCADE' });
  };

  Race.findByName = async race_name => {
    let race = await Race.findOne({
      where: { race_name },
    });

    if (!race) {
      return 'Error: Could not find race';
    }

    return race;
  };



  return Race;
};

export default race;
