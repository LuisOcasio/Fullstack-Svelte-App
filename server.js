import express from 'express'
import connectDB from './db/db'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import dotenv from 'dotenv'
import colors from 'colors'

dotenv.config()

connectDB()

const PORT = process.env.PORT || '3000'

// Construct a schema, using GraphQL schema language
const typeDefs = `
  type Query {vendor: Vendor}
  type Vendor{    
    id: ID
    first_name: String
    last_name: String
    email: String
    avatar: Boolean 
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    vendor() {
      return {
        id: 1,
        first_name: 'john',
        last_name: 'doe',
        email: 'johndoe@gmail.com',
        avatar: false,
      }
    },
  },
}

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

// Initialize the app
const app = express()

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

// Start the app
app.listen(PORT, () => {
  console.log(
    colors.yellow(`Go to http://localhost:${PORT}/graphiql to run queries!`)
  )
})
