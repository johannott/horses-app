import { GraphQLDateTime } from 'graphql-iso-date';

import userResolvers from './user';
import horseResolvers from './horse';
import raceResolvers from './race';
import entryResolvers from './entry';
import trendResolvers from './trend';
import winnerResolvers from './winner';
import accountResolvers from './account';
import betResolvers from './bet';
import trackResolvers from './track';
import noteResolvers from './note';
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
  winnerResolvers,
  accountResolvers,
  betResolvers,
  trackResolvers,
  noteResolvers,
  messageResolvers,
];
