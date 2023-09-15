export const schema = gql`
  type Document {
    id: Int!
    name: String!
    description: String!
    url: String!
    createdAt: DateTime!
    acreditionId: Int
    acredition: Acredition
  }

  type Query {
    documents: [Document!]! @requireAuth
    document(id: Int!): Document @requireAuth
  }

  input CreateDocumentInput {
    name: String!
    description: String!
    url: String!
    acreditionId: Int
  }

  input UpdateDocumentInput {
    name: String
    description: String
    url: String
    acreditionId: Int
  }

  type Mutation {
    createDocument(input: CreateDocumentInput!): Document! @requireAuth
    updateDocument(id: Int!, input: UpdateDocumentInput!): Document!
      @requireAuth
    deleteDocument(id: Int!): Document! @requireAuth
  }
`
