export default {
  Query: {
    trends: async (parent, args, { models }) => {
      return await models.Trend.findAll();
    },
    trend: async (parent, { id }, { models }) => {
      return await models.Trend.findById(id);
    },
    trendsByRace: async (parent, { race_name }, { models }) => {
      return await models.Trend.findAll({
        where: {
          race_name,
        }
      });
    },
  },

  Mutation: {
    addTrend: async (
      parent,
      { 
        race_name,
        trend_
      },
      { models },
    ) => {
      const trend = await models.Trend.create({
        race_name,
        trend_
      });

      return { trend_ };
    },
    updateTrend: async (
      parent,
      { 
       id,
       race_name,
       trend_
      },
      { models },
    ) => {
      const trend = await models.Trend.findById(id);
      return await trend.update({
        race_name,
        trend_
      });
    },
  }
};