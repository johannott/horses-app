import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    notes: [Note!]
    note(id: ID!): Note
    notesByType(type: String!): [Note!]
  }

  extend type Mutation {
    addNote(
      note_: String
      type: String
    ): Note!

    updateNote(
      note_: String
      type: String
    ): Note!
  }

  type Note {
    id: ID!
    note_: String
    type: String
  }
`;
