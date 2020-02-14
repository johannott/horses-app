import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    tracks: [Track!]
    track(id: ID!): Track
    trackByName(track_name: String!): Track!
    tracksByCountry(country: String!): [Track!]
    tracksByDirection(direction: String!): [Track!]
    tracksByTopography(topography: String!): [Track!]
  }

  extend type Mutation {
    addTrack(
      track_name: String!
      direction: String
      topography: String
      notes: String
      length: String
      surface: String
      country: String
    ): Track!

    updateTrack(
      id: ID!
      track_name: String!
      direction: String
      topography: String
      notes: String
      length: String
      surface: String
      country: String
    ): Track!
  }

  type Track {
    id: ID!
    track_name: String!
    direction: String
    topography: String
    notes: String
    length: String
    surface: String
    country: String
  }
`;
