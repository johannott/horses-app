import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    entries: [Entry!]
    entry(id: ID!): Entry
    entriesByRace(race_name: String!): [Entry!]
    entriesByHorse(horse_name: String!): [Entry!]
  }

  extend type Mutation {
    addEntry(
      race_name: String!
      horse_name: String!
      number: String
      weight: String
      jockey: String
      trends: String
      tipped: String
      bets: String
    ): Entry!

    updateEntry(
      race_name: String!
      horse_name: String!
      number: String
      weight: String
      jockey: String
      trends: String
      tipped: String
      bets: String
    ): Entry!
  }

  type Entry {
    id: ID!
    race_name: String!
    horse_name: String!
    number: String
    weight: String
    jockey: String
    trends: String
    tipped: String
    bets: String
  }
`;
