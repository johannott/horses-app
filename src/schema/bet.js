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
      type: String!
      places: String!
      price: String!
      amount: String!
      to_return: String!
      date: String!
      time: String!
    ): Bet!

    updateBet(
      id: ID!
      race_name: String!
      horse_name: [String!]
      type: String!
      places: String!
      price: String!
      amount: String!
      to_return: String!
      date: String!
      time: String!
    ): Bet!
  }

  type Bet {
    id: ID!
    race_name: String!
    horse_name: [String!]
    type: String!
    places: String!
    price: String!
    amount: String!
    to_return: String!
    date: String!
    time: String!
  }
`;
