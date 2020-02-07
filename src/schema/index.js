import { gql } from 'apollo-server-express';

import userSchema from './user';
import horseSchema from './horse';
import raceSchema from './race';
import entrySchema from './entry';
import trendSchema from './trend';
import accountSchema from './account';
import betSchema from './bet';
import trackSchema from './track';
import noteSchema from './note';
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
  accountSchema,
  betSchema,
  trackSchema,
  noteSchema,
  messageSchema
];
