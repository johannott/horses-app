import { GraphQLDateTime } from 'graphql-iso-date';

import userResolvers from './user';
import horseResolvers from './horse';
import messageResolvers from './message';

const customScalarResolver = {
  Date: GraphQLDateTime,
};

export default [
  customScalarResolver,
  userResolvers,
  horseResolvers,
  messageResolvers,
];
