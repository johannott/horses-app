import bcrypt from 'bcrypt';

const account = (sequelize, DataTypes) => {
  const Account = sequelize.define('account', {
    account_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    balance: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });

  Account.associate = models => {
    Account.hasMany(models.Message, { onDelete: 'CASCADE' });
  };

  Account.findByName = async account_name => {
    let account = await Account.findOne({
      where: { account_name },
    });

    if (!account) {
      return 'Error: Could not find betting account';
    }

    return account;
  };



  return Account;
};

export default account;
