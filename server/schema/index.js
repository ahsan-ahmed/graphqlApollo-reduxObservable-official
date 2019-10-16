const { gql } = require('apollo-server-express');
// const { userSchema } = require('./user');
// const { messageSchema } = require('./message');

// const linkSchema = gql`
// type Query {
// _: Boolean
// }
// type Mutation {
// _: Boolean
// }
// type Subscription {
// _: Boolean
// }
// `;

// const schema = [linkSchema, userSchema, messageSchema];
const schema = gql`
 type Query{
    user: User
    # users(rollno:Int):[User!]
 }
 type User{
     username:String
     email:String
     password:String
     
 }
 type Mutation {
    insertUser(
    username:String
     email:String
     password:String
        )
        :User!
    }
`;
module.exports = { schema }