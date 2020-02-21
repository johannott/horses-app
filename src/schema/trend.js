import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    trends: [Trend!]
    trend(id: ID!): Trend
    trendsByRace(race_name: String!): [Trend!]
  }

  extend type Mutation {
    addTrend(
      race_name: String!
      trend_: String!
      sentiment: String!
    ): Trend!

    updateTrend(
      id: ID!
      race_name: String
      trend_: String
      sentiment: String
    ): Trend!
  }

  type Trend {
    id: ID!
    race_name: String
    trend_: String
    sentiment: String
  }
`;
