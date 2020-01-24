export default {
  Query: {
    races: async (parent, args, { models }) => {
      return await models.Race.findAll();
    },
    race: async (parent, { id }, { models }) => {
      return await models.Race.findById(id);
    },
    raceByName: async (parent, { race_name }, { models }) => {
      return await models.Race.findAll({
        where: {
          race_name,
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
        age_limit
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
        age_limit
      });

      return { race_name };
    },
    updateRace: async (
      parent,
      { 
        current_race,
        race_name,
        race_fullname,
        type,
        grade,
        distance,
        course,
        age_limit
      },
      { models },
    ) => {
      const race = await models.Race.findByName(current_race);
      return await race.update({
        race_name,
        race_fullname,
        type,
        grade,
        distance,
        course,
        age_limit
      });
    },
  }
};
