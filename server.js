const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const cors = require("cors");

const app = express();
app.use(cors());

let users = {
  1: {
    id: "1",
    username: "Robin Wieruch"
  },
  2: {
    id: "2",
    username: "Dave Davids"
  }
};
const me = users[1];

const schema = gql`
  type Query {
    users: [User!]
    me: User
    user(id: ID!): User
  }
  type User {
    id: ID!
    username: String!
  }
`;
const resolvers = {
  Query: {
    me: () => {
      return me;
    },
    user: (parent, { id }) => {
      return users[id];
    }
  }
};
const server = new ApolloServer({
  typeDefs: schema,
  resolvers
});
server.applyMiddleware({ app, path: "/graphql" });
app.listen({ port: 8000 }, () => {
  console.log("Apollo Server on http://localhost:8000/graphql");
});
