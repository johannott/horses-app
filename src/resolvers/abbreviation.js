export default {
  Query: {
    abbreviations: async (parent, args, { models }) => {
      return await models.Abbreviation.findAll();
    },
    abbreviation: async (parent, { id }, { models }) => {
      return await models.Abbreviation.findById(id);
    }
  },

  Mutation: {
    addAbbreviation: async (
      parent,
      { 
        abbr,
        meaning
      },
      { models },
    ) => {
      const abbreviation = await models.Abbreviation.create({
        abbr,
        meaning
      });

      return { abbr };
    },
    updateAbbreviation: async (
      parent,
      { 
       id,
        abbr,
        meaning
      },
      { models },
    ) => {
      const abbreviation = await models.Abbreviation.findById(id);
      return await abbreviation.update({
        abbr,
        meaning
      });
    },
  }
};
