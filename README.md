GraphQL Server Demo
===================
Simple demo GraphQL Server connecting to MySQL using sequelize

Up & Running
============
Assuming nodejs is installed:
* `npm install`
* `npm run dev`
* Navigate to `localhost:4001/graphql`

```
query {
  users{
    id
    firstName
  }
  user(id:1){
    firstName
  }
}

```

Notes
========
* `nodemon` is used to restart the app when any files in the directory changes
* `express-graphql` server
* `models/user` - using sequelize to connect to mysql
* `schema/user_type` - defining UserType GraphQLObjectType
