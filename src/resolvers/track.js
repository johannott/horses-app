export default {
  Query: {
    tracks: async (parent, args, { models }) => {
      return await models.Track.findAll();
    },
    track: async (parent, { id }, { models }) => {
      return await models.Track.findById(id);
    },
    trackByName: async (parent, { account_name }, { models }) => {
      return await models.Track.findOne({
        where: {
          track_name,
        }
      });
    },
    tracksByCountry: async (parent, { country }, { models }) => {
      return await models.Track.findAll({
        where: {
          country
        }
      });
    },
    tracksByDirection: async (parent, { direction }, { models }) => {
      return await models.Track.findAll({
        where: {
          direction
        }
      });
    },
    tracksByTopography: async (parent, { topography }, { models }) => {
      return await models.Track.findAll({
        where: {
          topography
        }
      });
    }
  },

  Mutation: {
    addTrack: async (
      parent,
      { 
        track_name,
        direction,
        topography,
        notes,
        length,
        surface,
        country
      },
      { models },
    ) => {
      const track = await models.Track.create({
        track_name,
        direction,
        topography,
        notes,
        length,
        surface,
        country
      });

      return { track_name };
    },
    updateTrack: async (
      parent,
      { 
        track_name,
        direction,
        topography,
        notes,
        length,
        surface,
        country
      },
      { models },
    ) => {
      const track = await models.Track.findByName(track_name);
      return await account.update({
        track_name,
        direction,
        topography,
        notes,
        length,
        surface,
        country
      });
    },
  }
};
