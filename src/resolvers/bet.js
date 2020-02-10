export default {
  Query: {
    bets: async (parent, args, { models }) => {
      return await models.Bet.findAll();
    },
    bet: async (parent, { id }, { models }) => {
      return await models.Bet.findById(id);
    },
    betsByRace: async (parent, { race_name }, { models }) => {
      return await models.Bet.findAll({
        where: {
          race_name,
        }
      });
    },
    betsByHorse: async (parent, { horse_name }, { models }) => {
      return await models.Bet.findAll({
        where: {
          horse_name: { $contains: horse_name}
        }
      });
    },
  },

  Mutation: {
    addBet: async (
      parent,
      { 
        race_name,
        horse_name,
        type,
        places,
        price,
        amount,
        to_return,
        date,
        time
      },
      { models },
    ) => {
      const bet = await models.Bet.create({
        race_name,
        horse_name,
        type,
        places,
        price,
        amount,
        to_return,
        date,
        time
      });

      return { race_name, horse_name };
    },
    updateBet: async (
      parent,
      { 
        id,
        race_name,
        horse_name,
        type,
        places,
        price,
        amount,
        to_return,
        date,
        time
      },
      { models },
    ) => {
      const bet = await models.Bet.findById(id);
      return await bet.update({
        race_name,
        horse_name,
        type,
        places,
        price,
        amount,
        to_return,
        date,
        time
      });
    },
  }
};
