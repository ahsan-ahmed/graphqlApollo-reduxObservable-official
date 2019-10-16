const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require("cors");
const bodyparser = require("body-parser");
// Initialize the default app
// const admin = require('firebase-admin');
// const apps = admin.initializeApp();
// console.log(admin, apps)
const { schema } = require('./server/schema');
const { resolvers } = require('./server/resolvers');
const { User } = require('./server/models/users');
const { mongoose } = require("./server/dbConfig")
// const { admin } = require("./server/Config/firebase-admin/admin");
const db = mongoose.connection;
const port = process.env.PORT || 4000;
const app = express();

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
    console.log("db connected!");
});

app.use(cors());
app.use(bodyparser.json())

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: {
        User,
        // me: models.users[1],
    },
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen(port, () => {
    console.log(`Apollo Server on http://localhost:${port}/graphql`);
});
