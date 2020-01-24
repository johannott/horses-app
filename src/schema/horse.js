import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    horses: [Horse!]
    horse(id: ID!): Horse
    horseByName(horse_name: String!): Horse
  }

  extend type Mutation {
    addHorse(
      horse_name: String!
      trainer: String!
      regular_jockey: String!
      owner: String!
      age: String!
      gender: String!
      sire: String!
      form: String
      races: String
      wins: String
      places: String
      win_percentage: String
      place_percentage: String
      type: String
      distance: String
      ground: String
      track: String
      comments: String
      link: String
    ): Horse!

    updateHorse(
      current_name: String!
      horse_name: String!
      trainer: String!
      regular_jockey: String!
      owner: String!
      age: String!
      gender: String!
      sire: String!
      form: String
      races: String
      wins: String
      places: String
      win_percentage: String
      place_percentage: String
      type: String
      distance: String
      ground: String
      track: String
      comments: String
      link: String
    ): Horse!
  }

  type Horse {
    id: ID!
    horse_name: String!
    trainer: String!
    regular_jockey: String!
    owner: String!
    age: String!
    gender: String!
    sire: String!
    form: String
    races: String
    wins: String
    places: String
    win_percentage: String
    place_percentage: String
    type: String
    distance: String
    ground: String
    track: String
    comments: String
    link: String
  }
`;
