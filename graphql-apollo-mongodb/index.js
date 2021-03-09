const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./typeDefs');
const mongoose = require('mongoose');
const resolvers = require('./resolvers');
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.applyMiddleware({ app });
mongoose.connect('mongodb://localhost:27017/test');
app.use((req, res) => {
  res.status(200);
});
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)