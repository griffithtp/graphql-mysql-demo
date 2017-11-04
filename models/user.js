const Sequelize = require('sequelize');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

const sequelize = new Sequelize('dbname', 'root', 'pwd', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
sequelize.authenticate()
  .then( () =>  console.log('connection using sequelize ok.') )
  .catch( () => console.error('unable to connect to database: ', err) );

const User = sequelize.define('tbluser', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
});

User.sync({force: true}).then( () => {
  // Table create
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  })
});

module.exports = User;
