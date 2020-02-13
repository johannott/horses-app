import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    abbreviations: [Abbreviation!]
    abbreviation(id: ID!): Abbreviation
  }

  extend type Mutation {
    addAbbreviation(
      abbr: String!
      meaning: String!
    ): Abbreviation!

    updateAbbreviation(
      abbr: String!
      meaning: String!
    ): Abbreviation!
  }

  type Abbreviation {
    id: ID!
    abbr: String!
    meaning: String!
  }
`;
