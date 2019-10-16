const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const cors = require("cors");

const app = express();
app.use(cors());

let dogs = [
  {
    id: "1",
    breed: "Robin Wieruch"
  },
  {
    id: "2",
    breed: "Dave Davids"
  },
  {
    id: "3",
    breed: "Dave Davids"
  }
];

const schema = gql`
  type Dog {
    id: ID
    breed: String!
  }
  type Query {
    dogs: [Dog]
  }
`;
const resolvers = {
  Query: {
    dogs: () => dogs
    // me: () => {
    //   return me;
    // },
    // user: (parent, { id }) => {
    //   return users[id];
    // }
  }
};
const server = new ApolloServer({
  typeDefs: schema,
  resolvers
});
server.applyMiddleware({ app, path: "/todo" });
app.listen({ port: 4003 }, () => {
  console.log("Apollo Server on http://localhost:4003/todo");
});
