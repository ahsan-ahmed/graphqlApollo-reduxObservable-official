const userResolvers = {
  Query: {
    users: (parent, args, { models }) => {
      return Object.values(models.users);
    },
    user: (parent, { id }, { models }) => {
      return models.users[id];
    },
    me: (parent, args, { me }) => {
      return me;
    }
  },

  User: {
    messages: (user, args, { models }) => {
      return Object.values(models.messages).filter(
        message => message.userId === user.id
      );
    }
  }
};

module.exports = { userResolvers };

// const resolvers = {
//   Query: {
//     users: () => {
//       return Object.values(users);
//     },
//     user: (parent, { id }) => {
//       return users[id];
//     },
//     me: () => {
//       return me;
//     }
//   },
//   User: {
//     username: () => "Hans"
//   }
// };
