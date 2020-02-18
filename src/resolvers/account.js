export default {
  Query: {
    accounts: async (parent, args, { models }) => {
      return await models.Account.findAll({
        order: [['account_name', 'ASC']],
      });
    },
    account: async (parent, { id }, { models }) => {
      return await models.Account.findById(id);
    },
    accountByName: async (parent, { account_name }, { models }) => {
      return await models.Account.findOne({
        where: {
          account_name,
        }
      });
    },
  },

  Mutation: {
    addAccount: async (
      parent,
      { 
        account_name,
        username,
        password,
        balance,
        url
      },
      { models },
    ) => {
      const account = await models.Account.create({
        account_name,
        username,
        password,
        balance,
        url
      });

      return { account_name };
    },
    updateAccount: async (
      parent,
      { 
        account_name,
        username,
        password,
        balance,
        url
      },
      { models },
    ) => {
      const account = await models.Account.findByName(account_name);
      return await account.update({
        account_name,
        username,
        password,
        balance,
        url
      });
    },
  }
};
