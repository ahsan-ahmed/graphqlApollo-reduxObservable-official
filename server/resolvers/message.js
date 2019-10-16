const messageResolvers = {
    Query: {
        messages: (parent, args, { models }) => {
            return Object.values(models.messages);
        },
        message: (parent, { id }, { models }) => {
            return models.messages[id];
        },
    },
    Mutation: {
        createMessage: (parent, { text }, { me, models }) => {
            const message = {
                text, userId: me.id,
            };
            return message;
        },
    },

    Message: {
        user: (message, args, { models }) => {
            return models.users[message.userId];
        },
    },
};

module.exports = { messageResolvers }