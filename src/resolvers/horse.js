export default {
  Query: {
    horses: async (parent, args, { models }) => {
      return await models.Horse.findAll();
    },
    horse: async (parent, { id }, { models }) => {
      return await models.Horse.findById(id);
    },
  },
};
