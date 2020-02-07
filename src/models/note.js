import bcrypt from 'bcrypt';

const note = (sequelize, DataTypes) => {
  const Note = sequelize.define('note', {
  note_: {
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
  });

  Note.associate = models => {
    Note.hasMany(models.Message, { onDelete: 'CASCADE' });
  };


  Note.findById = async id => {
    let note = await Note.findOne({
      where: { id },
    });
    return note;
  };

  return Note;
};

export default note;
