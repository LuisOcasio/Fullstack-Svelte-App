'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var apolloServerExpress = require('apollo-server-express');
var graphqlTools = require('graphql-tools');
var dotenv = require('dotenv');
var colors = require('colors');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var express__default = /*#__PURE__*/_interopDefaultLegacy(express);
var bodyParser__default = /*#__PURE__*/_interopDefaultLegacy(bodyParser);
var dotenv__default = /*#__PURE__*/_interopDefaultLegacy(dotenv);
var colors__default = /*#__PURE__*/_interopDefaultLegacy(colors);

dotenv__default['default'].config();
var PORT = process.env.PORT || '3000'; // Construct a schema, using GraphQL schema language

var typeDefs = "\n  type Query {\n    hello: String\n  }\n"; // Provide resolver functions for your schema fields

var resolvers = {
  Query: {
    hello: function hello() {
      return 'Hello world!';
    }
  }
}; // Put together a schema

var schema = graphqlTools.makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers
}); // Initialize the app

var app = express__default['default'](); // The GraphQL endpoint

app.use('/graphql', bodyParser__default['default'].json(), apolloServerExpress.graphqlExpress({
  schema: schema
})); // GraphiQL, a visual editor for queries

app.use('/graphiql', apolloServerExpress.graphiqlExpress({
  endpointURL: '/graphql'
})); // Start the app

app.listen(PORT, function () {
  console.log(colors__default['default'].yellow("Go to http://localhost:".concat(PORT, "/graphiql to run queries!")));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLnNlcnZlci5qcyIsInNvdXJjZXMiOlsic2VydmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcidcbmltcG9ydCB7IGdyYXBocWxFeHByZXNzLCBncmFwaGlxbEV4cHJlc3MgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnXG5pbXBvcnQge21ha2VFeGVjdXRhYmxlU2NoZW1hfSBmcm9tICdncmFwaHFsLXRvb2xzJ1xuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnXG5pbXBvcnQgY29sb3JzIGZyb20gJ2NvbG9ycydcblxuZG90ZW52LmNvbmZpZygpXG5cbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8ICczMDAwJ1xuXG4vLyBDb25zdHJ1Y3QgYSBzY2hlbWEsIHVzaW5nIEdyYXBoUUwgc2NoZW1hIGxhbmd1YWdlXG5jb25zdCB0eXBlRGVmcyA9IGBcbiAgdHlwZSBRdWVyeSB7XG4gICAgaGVsbG86IFN0cmluZ1xuICB9XG5gXG5cbi8vIFByb3ZpZGUgcmVzb2x2ZXIgZnVuY3Rpb25zIGZvciB5b3VyIHNjaGVtYSBmaWVsZHNcbmNvbnN0IHJlc29sdmVycyA9IHtcbiAgUXVlcnk6IHtcbiAgICBoZWxsbzogKCkgPT4gJ0hlbGxvIHdvcmxkIScsXG4gIH0sXG59XG5cbi8vIFB1dCB0b2dldGhlciBhIHNjaGVtYVxuY29uc3Qgc2NoZW1hID0gbWFrZUV4ZWN1dGFibGVTY2hlbWEoe1xuICB0eXBlRGVmcyxcbiAgcmVzb2x2ZXJzLFxufSk7XG5cbi8vIEluaXRpYWxpemUgdGhlIGFwcFxuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG4vLyBUaGUgR3JhcGhRTCBlbmRwb2ludFxuYXBwLnVzZSgnL2dyYXBocWwnLCBib2R5UGFyc2VyLmpzb24oKSwgZ3JhcGhxbEV4cHJlc3MoeyBzY2hlbWEgfSkpO1xuXG4vLyBHcmFwaGlRTCwgYSB2aXN1YWwgZWRpdG9yIGZvciBxdWVyaWVzXG5hcHAudXNlKCcvZ3JhcGhpcWwnLCBncmFwaGlxbEV4cHJlc3MoeyBlbmRwb2ludFVSTDogJy9ncmFwaHFsJyB9KSk7XG5cbi8vIFN0YXJ0IHRoZSBhcHBcbmFwcC5saXN0ZW4oUE9SVCwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhjb2xvcnMueWVsbG93KGBHbyB0byBodHRwOi8vbG9jYWxob3N0OiR7UE9SVH0vZ3JhcGhpcWwgdG8gcnVuIHF1ZXJpZXMhYCkpXG59KVxuIl0sIm5hbWVzIjpbImRvdGVudiIsImNvbmZpZyIsIlBPUlQiLCJwcm9jZXNzIiwiZW52IiwidHlwZURlZnMiLCJyZXNvbHZlcnMiLCJRdWVyeSIsImhlbGxvIiwic2NoZW1hIiwibWFrZUV4ZWN1dGFibGVTY2hlbWEiLCJhcHAiLCJleHByZXNzIiwidXNlIiwiYm9keVBhcnNlciIsImpzb24iLCJncmFwaHFsRXhwcmVzcyIsImdyYXBoaXFsRXhwcmVzcyIsImVuZHBvaW50VVJMIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyIsImNvbG9ycyIsInllbGxvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQU9BQSwwQkFBTSxDQUFDQyxNQUFQO0FBRUEsSUFBTUMsSUFBSSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixJQUFvQixNQUFqQzs7QUFHQSxJQUFNRyxRQUFRLCtDQUFkOztBQU9BLElBQU1DLFNBQVMsR0FBRztBQUNoQkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLEtBQUssRUFBRTtBQUFBLGFBQU0sY0FBTjtBQUFBO0FBREY7QUFEUyxDQUFsQjs7QUFPQSxJQUFNQyxNQUFNLEdBQUdDLGlDQUFvQixDQUFDO0FBQ2xDTCxFQUFBQSxRQUFRLEVBQVJBLFFBRGtDO0FBRWxDQyxFQUFBQSxTQUFTLEVBQVRBO0FBRmtDLENBQUQsQ0FBbkM7O0FBTUEsSUFBTUssR0FBRyxHQUFHQywyQkFBTyxFQUFuQjs7QUFHQUQsR0FBRyxDQUFDRSxHQUFKLENBQVEsVUFBUixFQUFvQkMsOEJBQVUsQ0FBQ0MsSUFBWCxFQUFwQixFQUF1Q0Msa0NBQWMsQ0FBQztBQUFFUCxFQUFBQSxNQUFNLEVBQU5BO0FBQUYsQ0FBRCxDQUFyRDs7QUFHQUUsR0FBRyxDQUFDRSxHQUFKLENBQVEsV0FBUixFQUFxQkksbUNBQWUsQ0FBQztBQUFFQyxFQUFBQSxXQUFXLEVBQUU7QUFBZixDQUFELENBQXBDOztBQUdBUCxHQUFHLENBQUNRLE1BQUosQ0FBV2pCLElBQVgsRUFBaUIsWUFBTTtBQUNyQmtCLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQywwQkFBTSxDQUFDQyxNQUFQLGtDQUF3Q3JCLElBQXhDLCtCQUFaO0FBQ0QsQ0FGRDs7In0=
