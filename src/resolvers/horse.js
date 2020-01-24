export default {
  Query: {
    horses: async (parent, args, { models }) => {
      return await models.Horse.findAll();
    },
    horse: async (parent, { id }, { models }) => {
      return await models.Horse.findById(id);
    },
    horseByName: async (parent, { horse_name }, { models }) => {
      return await models.Horse.findAll({
        where: {
          horse_name,
        }
      });
    },
  },

  Mutation: {
    addHorse: async (
      parent,
      { 
        horse_name,
        trainer,
        regular_jockey,
        owner,
        age,
        gender,
        sire,
        form,
        races,
        wins,
        places,
        win_percentage,
        place_percentage,
        type,
        distance,
        ground,
        track,
        comments,
        link
      },
      { models },
    ) => {
      const horse = await models.Horse.create({
        horse_name,
        trainer,
        regular_jockey,
        owner,
        age,
        gender,
        sire,
        form,
        races,
        wins,
        places,
        win_percentage,
        place_percentage,
        type,
        distance,
        ground,
        track,
        comments,
        link
      });

      return { horse_name };
    },
    updateHorse: async (
      parent,
      { 
        current_name,
        horse_name,
        trainer,
        regular_jockey,
        owner,
        age,
        gender,
        sire,
        form,
        races,
        wins,
        places,
        win_percentage,
        place_percentage,
        type,
        distance,
        ground,
        track,
        comments,
        link
      },
      { models },
    ) => {
      const horse = await models.Horse.findByName(current_name);
      return await horse.update({
        horse_name,
        trainer,
        regular_jockey,
        owner,
        age,
        gender,
        sire,
        form,
        races,
        wins,
        places,
        win_percentage,
        place_percentage,
        type,
        distance,
        ground,
        track,
        comments,
        link
      });
    },
  }
};