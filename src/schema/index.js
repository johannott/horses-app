import { gql } from 'apollo-server-express';

import userSchema from './user';
import horseSchema from './horse';
import raceSchema from './race';
import entrySchema from './entry';
import trendSchema from './trend';
import winnerSchema from './winner';
import accountSchema from './account';
import betSchema from './bet';
import trackSchema from './track';
import noteSchema from './note';
import abbreviationSchema from './abbreviation';
import messageSchema from './message';

const linkSchema = gql`
  scalar Date

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

export default [
  linkSchema,
  userSchema,
  horseSchema,
  raceSchema,
  entrySchema,
  trendSchema,
  winnerSchema,
  accountSchema,
  betSchema,
  trackSchema,
  noteSchema,
  abbreviationSchema,
  messageSchema
];
