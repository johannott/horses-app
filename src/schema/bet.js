import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    bets: [Bet!]
    bet(id: ID!): Bet
    betsByRace(race_name: String!): [Bet!]
    betsByHorse(horse_name: String!): [Bet!]
  }

  extend type Mutation {
    addBet(
      race_name: String!
      horse_name: [String!]
      type: String
      price: String
      amount: String
    ): Bet!

    updateBet(
      race_name: String!
      horse_name: [String!]
      type: String
      price: String
      amount: String
    ): Bet!
  }

  type Bet {
    id: ID!
    race_name: String!
    horse_name: [String!]
    type: String
    price: String
    amount: String
  }
`;
