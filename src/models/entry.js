import bcrypt from 'bcrypt';

const entry = (sequelize, DataTypes) => {
  const Entry = sequelize.define('entry', {
    race_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    horse_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    number: {
      type: DataTypes.STRING,
    },
    weight: {
      type: DataTypes.STRING,
    },
    jockey: {
      type: DataTypes.STRING,
    },
    trends: {
      type: DataTypes.STRING,
    },
    tipped: {
      type: DataTypes.STRING,
    },
    bets: {
      type: DataTypes.STRING,
    }
  });

  Entry.associate = models => {
    Entry.hasMany(models.Message, { onDelete: 'CASCADE' });
  };

  Entry.findByNames = async (race_name, horse_name) => {
    let entry = await Entry.findOne({
      where: { race_name, horse_name },
    });

    if (!entry) {
      return 'Error: Could not find entry by names';
    }

    return entry;
  };

  return Entry;
};

export default entry;
