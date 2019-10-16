// const { userResolvers } = require('./user');
// const { messageResolvers } = require('./message');
// const resolvers = [userResolvers, messageResolvers];
// const { initDefault } = require("../Config/firebase-admin/admin")
const admin = require('firebase-admin');
const account = require("./../../server/service-account-file.json")
var refreshToken;
admin.initializeApp({
    credential: admin.credential.refreshToken(refreshToken),
    // databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});
const resolvers = {
    Query: {
        user: async (parent, args, ss) => {

        },
        // user: async (parent, args, { User }) => {
        //     const user = await User.findById(args.id);
        //     if (user) return user;
        //     else throw new Error('No book with this ID found');
        // }
    },
    Mutation: {
        insertUser: async (parent, args, User) => {
            console.log(args, "args")
            admin.auth().createUser({
                username: args.username,
                email: args.email,

                password: args.password,

            })
                .then(function (userRecord) {
                    // See the UserRecord reference doc for the contents of userRecord.
                    console.log('Successfully created new user:', userRecord.uid);
                    return userRecord;
                })
                .catch(function (error) {
                    console.log('Error creating new user:', error);
                    return error
                });

        }
    }
}

module.exports = { resolvers }