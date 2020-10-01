'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var apolloServerExpress = require('apollo-server-express');
var graphqlTools = require('graphql-tools');
var dotenv = require('dotenv');
var colors = require('colors');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var express__default = /*#__PURE__*/_interopDefaultLegacy(express);
var mongoose__default = /*#__PURE__*/_interopDefaultLegacy(mongoose);
var bodyParser__default = /*#__PURE__*/_interopDefaultLegacy(bodyParser);
var dotenv__default = /*#__PURE__*/_interopDefaultLegacy(dotenv);
var colors__default = /*#__PURE__*/_interopDefaultLegacy(colors);

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

var connectDB = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* () {
    var conn = yield mongoose__default['default'].connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log("MongoDB Connected: ".concat(conn.connection.host).magenta.underline.bold);
  });

  return function connectDB() {
    return _ref.apply(this, arguments);
  };
}();

dotenv__default['default'].config();
connectDB();
var PORT = process.env.PORT || '3000'; // Construct a schema, using GraphQL schema language

var typeDefs = "\n  type Query {vendor: Vendor}\n  type Vendor{    \n    id: ID\n    first_name: String\n    last_name: String\n    email: String\n    avatar: Boolean \n  }\n"; // Provide resolver functions for your schema fields

var resolvers = {
  Query: {
    vendor() {
      return {
        id: 1,
        first_name: 'john',
        last_name: 'doe',
        email: 'johndoe@gmail.com',
        avatar: false
      };
    }

  }
}; // Put together a schema

var schema = graphqlTools.makeExecutableSchema({
  typeDefs,
  resolvers
}); // Initialize the app

var app = express__default['default'](); // The GraphQL endpoint

app.use('/graphql', bodyParser__default['default'].json(), apolloServerExpress.graphqlExpress({
  schema
})); // GraphiQL, a visual editor for queries

app.use('/graphiql', apolloServerExpress.graphiqlExpress({
  endpointURL: '/graphql'
})); // Start the app

app.listen(PORT, () => {
  console.log(colors__default['default'].yellow("Go to http://localhost:".concat(PORT, "/graphiql to run queries!")));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLnNlcnZlci5qcyIsInNvdXJjZXMiOlsiZGIvZGIuanMiLCJzZXJ2ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gd2Ugd2lsbCBob29rIHVwIHRvIG1vbmdvb3NlIGhlcmUuXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXG5cbi8vd2lsbCByZXNvbHZlIGRlcHJlY2F0ZWQgd2FybmluZ3NcbmNvbnN0IGNvbm5lY3REQiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY29ubiA9IGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkwsIHtcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgdXNlQ3JlYXRlSW5kZXg6IHRydWUsXG4gICAgdXNlRmluZEFuZE1vZGlmeTogZmFsc2UsXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICB9KVxuXG4gIGNvbnNvbGUubG9nKFxuICAgIGBNb25nb0RCIENvbm5lY3RlZDogJHtjb25uLmNvbm5lY3Rpb24uaG9zdH1gLm1hZ2VudGEudW5kZXJsaW5lLmJvbGRcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REIiLCJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IGNvbm5lY3REQiBmcm9tICcuL2RiL2RiJ1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgeyBncmFwaHFsRXhwcmVzcywgZ3JhcGhpcWxFeHByZXNzIH0gZnJvbSAnYXBvbGxvLXNlcnZlci1leHByZXNzJ1xuaW1wb3J0IHsgbWFrZUV4ZWN1dGFibGVTY2hlbWEgfSBmcm9tICdncmFwaHFsLXRvb2xzJ1xuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnXG5pbXBvcnQgY29sb3JzIGZyb20gJ2NvbG9ycydcblxuZG90ZW52LmNvbmZpZygpXG5cbmNvbm5lY3REQigpXG5cbmNvbnN0IFBPUlQgPSBwcm9jZXNzLmVudi5QT1JUIHx8ICczMDAwJ1xuXG4vLyBDb25zdHJ1Y3QgYSBzY2hlbWEsIHVzaW5nIEdyYXBoUUwgc2NoZW1hIGxhbmd1YWdlXG5jb25zdCB0eXBlRGVmcyA9IGBcbiAgdHlwZSBRdWVyeSB7dmVuZG9yOiBWZW5kb3J9XG4gIHR5cGUgVmVuZG9yeyAgICBcbiAgICBpZDogSURcbiAgICBmaXJzdF9uYW1lOiBTdHJpbmdcbiAgICBsYXN0X25hbWU6IFN0cmluZ1xuICAgIGVtYWlsOiBTdHJpbmdcbiAgICBhdmF0YXI6IEJvb2xlYW4gXG4gIH1cbmBcblxuLy8gUHJvdmlkZSByZXNvbHZlciBmdW5jdGlvbnMgZm9yIHlvdXIgc2NoZW1hIGZpZWxkc1xuY29uc3QgcmVzb2x2ZXJzID0ge1xuICBRdWVyeToge1xuICAgIHZlbmRvcigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBmaXJzdF9uYW1lOiAnam9obicsXG4gICAgICAgIGxhc3RfbmFtZTogJ2RvZScsXG4gICAgICAgIGVtYWlsOiAnam9obmRvZUBnbWFpbC5jb20nLFxuICAgICAgICBhdmF0YXI6IGZhbHNlLFxuICAgICAgfVxuICAgIH0sXG4gIH0sXG59XG5cbi8vIFB1dCB0b2dldGhlciBhIHNjaGVtYVxuY29uc3Qgc2NoZW1hID0gbWFrZUV4ZWN1dGFibGVTY2hlbWEoe1xuICB0eXBlRGVmcyxcbiAgcmVzb2x2ZXJzLFxufSlcblxuLy8gSW5pdGlhbGl6ZSB0aGUgYXBwXG5jb25zdCBhcHAgPSBleHByZXNzKClcblxuLy8gVGhlIEdyYXBoUUwgZW5kcG9pbnRcbmFwcC51c2UoJy9ncmFwaHFsJywgYm9keVBhcnNlci5qc29uKCksIGdyYXBocWxFeHByZXNzKHsgc2NoZW1hIH0pKVxuXG4vLyBHcmFwaGlRTCwgYSB2aXN1YWwgZWRpdG9yIGZvciBxdWVyaWVzXG5hcHAudXNlKCcvZ3JhcGhpcWwnLCBncmFwaGlxbEV4cHJlc3MoeyBlbmRwb2ludFVSTDogJy9ncmFwaHFsJyB9KSlcblxuLy8gU3RhcnQgdGhlIGFwcFxuYXBwLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFxuICAgIGNvbG9ycy55ZWxsb3coYEdvIHRvIGh0dHA6Ly9sb2NhbGhvc3Q6JHtQT1JUfS9ncmFwaGlxbCB0byBydW4gcXVlcmllcyFgKVxuICApXG59KVxuIl0sIm5hbWVzIjpbImNvbm5lY3REQiIsImNvbm4iLCJtb25nb29zZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkwiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VDcmVhdGVJbmRleCIsInVzZUZpbmRBbmRNb2RpZnkiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdGlvbiIsImhvc3QiLCJtYWdlbnRhIiwidW5kZXJsaW5lIiwiYm9sZCIsImRvdGVudiIsImNvbmZpZyIsIlBPUlQiLCJ0eXBlRGVmcyIsInJlc29sdmVycyIsIlF1ZXJ5IiwidmVuZG9yIiwiaWQiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJhdmF0YXIiLCJzY2hlbWEiLCJtYWtlRXhlY3V0YWJsZVNjaGVtYSIsImFwcCIsImV4cHJlc3MiLCJ1c2UiLCJib2R5UGFyc2VyIiwianNvbiIsImdyYXBocWxFeHByZXNzIiwiZ3JhcGhpcWxFeHByZXNzIiwiZW5kcG9pbnRVUkwiLCJsaXN0ZW4iLCJjb2xvcnMiLCJ5ZWxsb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLElBQU1BLFNBQVM7QUFBQSwrQkFBRyxhQUFZO0FBQzVCLFFBQU1DLElBQUksU0FBU0MsNEJBQVEsQ0FBQ0MsT0FBVCxDQUFpQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFdBQTdCLEVBQTBDO0FBQzNEQyxNQUFBQSxlQUFlLEVBQUUsSUFEMEM7QUFFM0RDLE1BQUFBLGNBQWMsRUFBRSxJQUYyQztBQUczREMsTUFBQUEsZ0JBQWdCLEVBQUUsS0FIeUM7QUFJM0RDLE1BQUFBLGtCQUFrQixFQUFFO0FBSnVDLEtBQTFDLENBQW5CO0FBT0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUNFLDZCQUFzQlgsSUFBSSxDQUFDWSxVQUFMLENBQWdCQyxJQUF0QyxFQUE2Q0MsT0FBN0MsQ0FBcURDLFNBQXJELENBQStEQyxJQURqRTtBQUdELEdBWGM7O0FBQUEsa0JBQVRqQixTQUFTO0FBQUE7QUFBQTtBQUFBLEdBQWY7O0FDSUFrQiwwQkFBTSxDQUFDQyxNQUFQO0FBRUFuQixTQUFTO0FBRVQsSUFBTW9CLElBQUksR0FBR2hCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZZSxJQUFaLElBQW9CLE1BQWpDOztBQUdBLElBQU1DLFFBQVEsbUtBQWQ7O0FBWUEsSUFBTUMsU0FBUyxHQUFHO0FBQ2hCQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsTUFBTSxHQUFHO0FBQ1AsYUFBTztBQUNMQyxRQUFBQSxFQUFFLEVBQUUsQ0FEQztBQUVMQyxRQUFBQSxVQUFVLEVBQUUsTUFGUDtBQUdMQyxRQUFBQSxTQUFTLEVBQUUsS0FITjtBQUlMQyxRQUFBQSxLQUFLLEVBQUUsbUJBSkY7QUFLTEMsUUFBQUEsTUFBTSxFQUFFO0FBTEgsT0FBUDtBQU9EOztBQVRJO0FBRFMsQ0FBbEI7O0FBZUEsSUFBTUMsTUFBTSxHQUFHQyxpQ0FBb0IsQ0FBQztBQUNsQ1YsRUFBQUEsUUFEa0M7QUFFbENDLEVBQUFBO0FBRmtDLENBQUQsQ0FBbkM7O0FBTUEsSUFBTVUsR0FBRyxHQUFHQywyQkFBTyxFQUFuQjs7QUFHQUQsR0FBRyxDQUFDRSxHQUFKLENBQVEsVUFBUixFQUFvQkMsOEJBQVUsQ0FBQ0MsSUFBWCxFQUFwQixFQUF1Q0Msa0NBQWMsQ0FBQztBQUFFUCxFQUFBQTtBQUFGLENBQUQsQ0FBckQ7O0FBR0FFLEdBQUcsQ0FBQ0UsR0FBSixDQUFRLFdBQVIsRUFBcUJJLG1DQUFlLENBQUM7QUFBRUMsRUFBQUEsV0FBVyxFQUFFO0FBQWYsQ0FBRCxDQUFwQzs7QUFHQVAsR0FBRyxDQUFDUSxNQUFKLENBQVdwQixJQUFYLEVBQWlCLE1BQU07QUFDckJULEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUNFNkIsMEJBQU0sQ0FBQ0MsTUFBUCxrQ0FBd0N0QixJQUF4QywrQkFERjtBQUdELENBSkQ7OyJ9
