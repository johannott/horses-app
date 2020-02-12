import bcrypt from 'bcrypt';

const winner = (sequelize, DataTypes) => {
  const Winner = sequelize.define('winner', {
    race_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    year: {
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
    jockey: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    trainer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    },
    weight: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    },
    distance: {
      type: DataTypes.STRING,
    },
    time: {
      type: DataTypes.STRING,
    },
    going: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.STRING,
    },
    form: {
      type: DataTypes.STRING,
    },
    runs: {
      type: DataTypes.STRING,
    },
    wins: {
      type: DataTypes.STRING,
    },
    cheltenham_runs: {
      type: DataTypes.STRING,
    },
    cheltenham_wins: {
      type: DataTypes.STRING,
    },
    distance_runs: {
      type: DataTypes.STRING,
    },
    distance_wins: {
      type: DataTypes.STRING,
    },
    hurdles_runs: {
      type: DataTypes.STRING,
    },
    hurdles_wins: {
      type: DataTypes.STRING,
    },
    chase_runs: {
      type: DataTypes.STRING,
    },
    chase_wins: {
      type: DataTypes.STRING,
    },
    last_run: {
      type: DataTypes.STRING,
    },
    since_last_run: {
      type: DataTypes.STRING,
    },
    last_run_result: {
      type: DataTypes.STRING,
    },
    grade_one_wins: {
      type: DataTypes.STRING,
    },
    grade_two_wins: {
      type: DataTypes.STRING,
    },
    grade_three_wins: {
      type: DataTypes.STRING,
    },
    video_url: {
      type: DataTypes.STRING,
    }
  });

  Winner.associate = models => {
    Winner.hasMany(models.Message, { onDelete: 'CASCADE' });
  };

  Winner.findById= async id => {
    let winner = await Winner.findOne({
      where: { id },
    });

    if (!winner) {
      return 'Error: Could not find winner';
    }

    return winner;
  };

  return Winner;
};

export default winner;
