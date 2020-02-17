export default {
  Query: {
    races: async (parent, args, { models }) => {
      return await models.Race.findAll({
        order: [
          ['id', 'ASC'],
        ]
      });
    },
    race: async (parent, { id }, { models }) => {
      return await models.Race.findById(id);
    },
    raceByName: async (parent, { race_name }, { models }) => {
      return await models.Race.findOne({
        where: {
          race_name,
        }
      });
    },
    racesByCountry: async (parent, { country }, { models }) => {
      return await models.Race.findAll({
        where: {
          country,
        }
      });
    },
  },

  Mutation: {
    addRace: async (
      parent,
      { 
        race_name,
        race_fullname,
        type,
        grade,
        distance,
        course,
        country,
        age_limit,
        attended
      },
      { models },
    ) => {
      const race = await models.Race.create({
        race_name,
        race_fullname,
        type,
        grade,
        distance,
        course,
        country,
        age_limit,
        attended
      });

      return { race_name };
    },
    updateRace: async (
      parent,
      { 
        id,
        race_name,
        race_fullname,
        type,
        grade,
        distance,
        course,
        country,
        age_limit,
        attended
      },
      { models },
    ) => {
      const race = await models.Race.findById(id);
      return await race.update({
        race_name,
        race_fullname,
        type,
        grade,
        distance,
        course,
        country,
        age_limit,
        attended
      });
    },
  }
};
