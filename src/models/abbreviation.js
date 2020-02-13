import bcrypt from 'bcrypt';

const abbreviation = (sequelize, DataTypes) => {
  const Abbreviation = sequelize.define('abbreviation', {
  abbr: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    meaning: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    },
  });

  Abbreviation.associate = models => {
    Abbreviation.hasMany(models.Message, { onDelete: 'CASCADE' });
  };


  Abbreviation.findById = async id => {
    let abbreviation = await Abbreviation.findOne({
      where: { id },
    });
    return abbreviation;
  };



  return Abbreviation;
};

export default abbreviation;
