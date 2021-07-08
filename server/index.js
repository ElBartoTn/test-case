const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Product" type defines the queryable fields for every Product in our data source.
  type Product {
    id: String
    name: String
    slug: String
    brand: String
    type: String
    image: String
    price: Int
    size: String
    rating: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "products" query returns an array of zero or more Products (defined above).
  type Query {
    products: [Product]
  }
`;
const products = require("./productlist.json");
const resolvers = {
  Query: {
    products: () => products,
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});