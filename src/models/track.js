import bcrypt from 'bcrypt';

const track = (sequelize, DataTypes) => {
  const Track = sequelize.define('track', {
    track_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    direction: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    topography: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    length: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    surface: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });

  Track.associate = models => {
    Track.hasMany(models.Message, { onDelete: 'CASCADE' });
  };

  Track.findByName = async (track_name) => {
    let track = await Track.findOne({
      where: { track_name },
    });

    if (!track) {
      return 'Error: Could not find track by name';
    }

    return track;
  };



  return Track;
};

export default track;