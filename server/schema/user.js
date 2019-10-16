const { gql } = require("apollo-server-express");

const userSchema = gql`
 extend type Query {
users: [User!]
user(id: ID!): User
me: User

}

type User {
id: ID!
username: String!
messages:[Message!]
}
`;

module.exports = { userSchema }