import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    accounts: [Account!]
    account(id: ID!): Account
    accountByName(account_name: String!): Account!
  }

  extend type Mutation {
    addAccount(
      account_name: String!
      username: String!
      password: String
      balance: String
    ): Account!

    updateAccount(
      account_name: String!
      username: String!
      password: String
      balance: String
    ): Account!
  }

  type Account {
    id: ID!
    account_name: String!
    username: String!
    password: String
    balance: String
  }
`;
