import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    winners: [Winner!]
    winner(id: ID!): Winner!
    winnersByRace(race_name: String!): [Winner!]
  }

  extend type Mutation {
    addWinner(
      race_name: String!
      year: String!
      horse_name: String!
      jockey: String!
      trainer: String!
      age: String!
      weight: String!
      distance: String
      time: String
      going: String
      price: String
      rating: String
      form: String
      runs: String
      wins: String
      cheltenham_runs: String
      cheltenham_wins: String
      distance_runs: String
      distance_wins: String
      hurdles_runs: String
      hurdles_wins: String
      chase_runs: String
      chase_wins: String
      last_run: String
      since_last_run: String
      last_run_result: String
      grade_one_wins: String
      grade_two_wins: String
      grade_three_wins: String
      video_url: String
    ): Winner!

    updateWinner(
      id: ID!
      race_name: String!
      year: String!
      horse_name: String!
      jockey: String!
      trainer: String!
      age: String!
      weight: String!
      distance: String
      time: String
      going: String
      price: String
      rating: String
      form: String
      runs: String
      wins: String
      cheltenham_runs: String
      cheltenham_wins: String
      distance_runs: String
      distance_wins: String
      hurdles_runs: String
      hurdles_wins: String
      chase_runs: String
      chase_wins: String
      last_run: String
      since_last_run: String
      last_run_result: String
      grade_one_wins: String
      grade_two_wins: String
      grade_three_wins: String
      video_url: String
    ): Winner!
  }

  type Winner {
    id: ID!
    race_name: String!
    year: String!
    horse_name: String!
    jockey: String!
    trainer: String!
    age: String!
    weight: String!
    distance: String
    time: String
    going: String
    price: String
    rating: String
    form: String
    runs: String
    wins: String
    cheltenham_runs: String
    cheltenham_wins: String
    distance_runs: String
    distance_wins: String
    hurdles_runs: String
    hurdles_wins: String
    chase_runs: String
    chase_wins: String
    last_run: String
    since_last_run: String
    last_run_result: String
    grade_one_wins: String
    grade_two_wins: String
    grade_three_wins: String
    video_url: String
  }
`;
