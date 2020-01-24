import { GraphQLDateTime } from 'graphql-iso-date';

import userResolvers from './user';
import horseResolvers from './horse';
import raceResolvers from './race';
import entryResolvers from './entry';
import trendResolvers from './trend';
import messageResolvers from './message';

const customScalarResolver = {
  Date: GraphQLDateTime,
};

export default [
  customScalarResolver,
  userResolvers,
  horseResolvers,
  raceResolvers,
  entryResolvers,
  trendResolvers,
  messageResolvers,
];
