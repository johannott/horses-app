export default {
  Query: {
    notes: async (parent, args, { models }) => {
      return await models.Note.findAll();
    },
    note: async (parent, { id }, { models }) => {
      return await models.Note.findById(id);
    },
    notesByType: async (parent, { type }, { models }) => {
      return await models.Note.findAll({
        where: {
          type,
        }
      });
    },
  },

  Mutation: {
    addNote: async (
      parent,
      { 
        note_,
        type
      },
      { models },
    ) => {
      const note = await models.Note.create({
        note_,
        type
      });

      return { note_, type };
    },
    updateNote: async (
      parent,
      { 
       id,
       note_,
       type
      },
      { models },
    ) => {
      const note = await models.Note.findById(id);
      return await note.update({
        note_,
        type
      });
    },
  }
};
