const { gql } = require("apollo-server-express");

const messageSchema = gql`
 extend type Query {
messages: [Message!]!
message(id: ID!): Message!
}

 extend type Mutation {
createMessage(text: String!): Message!
}

type Message {
    id: ID!
    text: String!
    user: User!
}`;
module.exports = { messageSchema }