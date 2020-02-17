import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    races: [Race!]
    race(id: ID!): Race
    raceByName(race_name: String!): Race!
    racesByCountry(country: String!): [Race!]
  }

  extend type Mutation {
    addRace(
      race_name: String!
      race_fullname: String!
      type: String!
      grade: String
      distance: String!
      course: String!
      country: String!
      age_limit: String!
      attended: String!
    ): Race!

    updateRace(
      id: ID!
      race_name: String
      race_fullname: String
      type: String
      grade: String
      distance: String
      course: String
      country: String
      age_limit: String
      attended: String
    ): Race!
  }

  type Race {
    id: ID!
    race_name: String!
    race_fullname: String!
    type: String!
    grade: String
    distance: String!
    course: String!
    country: String!
    age_limit: String!
    attended: String!
  }
`;
