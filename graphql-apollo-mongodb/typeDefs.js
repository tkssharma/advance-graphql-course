const {gql} = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    cats: [Cat!]!
    animals: [Animal!]!
    cat(id: String!): Cat!
  }
  type Cat {
  	id: ID!
  	name: String!
  }
  type Animal {
  	id: ID!
  	name: String!
  }
  type Mutation {
  	createCat(name: String!): Cat!
    updateCat(id: String!, name: String!): Cat!
    deleteCat(id: String!): Boolean!
  }
`
module.exports = typeDefs;
