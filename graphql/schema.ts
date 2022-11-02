import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';


export const typeDefs = `#graphql

  type Transaction {
    reference: String
    amount: Int
    currency: String
    date: String
  }

  type Query {
    transactions: [Transaction]
  }
`;