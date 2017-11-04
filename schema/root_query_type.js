const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = graphql;
const User = require('../models/user');
const UserType = require('./user_type');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      resolve() {
        return User
          .findAll()
          .then( users => {
            return users;
          })
          .catch( err => console.log(err) );
      }
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLInt } },
      resolve(parentValue, args) {
        return User
          .findById(args.id)
          .then( users => {
            return users;
          })
          .catch( err => console.log(err) );
      }
    }
  })
});

module.exports = RootQuery;
