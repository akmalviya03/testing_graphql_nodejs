const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./Schema/TypeDefs");
const { resolvers } = require("./Schema/Resolvers");
const express = require("express");

const app = express();

//Instantiating graphql server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    // Note: This example uses the `req` argument to access headers,
    // but the arguments received by `context` vary by integration.
    // This means they vary for Express, Koa, Lambda, etc.
    //
    // To find out the correct arguments for a specific integration,
    // see https://www.apollographql.com/docs/apollo-server/api/apollo-server/#middleware-specific-context-fields

    // Get the user token from the headers.
    const token = req.headers.authorization || "";

    // Try to retrieve a user with the token
    // const user = getUser(token);
    console.log(token);
    console.log(req.body);
    // Add the user to the context
    return { token };
  },
});

//server is middle ware and we are applying it to app
server.applyMiddleware({ app });

app.listen({ port: 3001 }, () => {
  console.log("Server Running On Port 3001");
});
