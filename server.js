import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import {makeExecutableSchema} from 'graphql-tools'
import dotenv from 'dotenv'
import colors from 'colors'

dotenv.config()

const PORT = process.env.PORT || '3000'

// Construct a schema, using GraphQL schema language
const typeDefs = `
  type Query {
    hello: String
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
}

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Initialize the app
const app = express();

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the app
app.listen(PORT, () => {
  console.log(colors.yellow(`Go to http://localhost:${PORT}/graphiql to run queries!`))
})
