export default {
  Query: {
    entries: async (parent, args, { models }) => {
      return await models.Entry.findAll();
    },
    entry: async (parent, { id }, { models }) => {
      return await models.Entry.findById(id);
    },
    entriesByRace: async (parent, { race_name }, { models }) => {
      return await models.Entry.findAll({
        where: {
          race_name,
        }
      });
    },
    entriesByHorse: async (parent, { horse_name }, { models }) => {
      return await models.Entry.findAll({
        where: {
          horse_name,
        }
      });
    },
  },

  Mutation: {
    addEntry: async (
      parent,
      { 
        race_name,
        horse_name,
        number,
        weight,
        jockey,
        trends,
        tipped,
        bets
      },
      { models },
    ) => {
      const entry = await models.Entry.create({
        race_name,
        horse_name,
        number,
        weight,
        jockey,
        trends,
        tipped,
        bets
      });

      return { race_name, horse_name };
    },
    updateEntry: async (
      parent,
      { 
        race_name,
        horse_name,
        number,
        weight,
        jockey,
        trends,
        tipped,
        bets
      },
      { models },
    ) => {
      const entry = await models.Entry.findByNames(race_name, horse_name);
      return await entry.update({
        race_name,
        horse_name,
        number,
        weight,
        jockey,
        trends,
        tipped,
        bets
      });
    },
  }
};
