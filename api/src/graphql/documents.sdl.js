export const schema = gql`
  type Document {
    id: Int!
    name: String!
    description: String!
    url: String!
    createdAt: DateTime!
    acreditionId: Int
    acredition: Acredition
    qualifiedRegistryId: Int
    qualifiedRegistry: QualifiedRegistry
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
    qualifiedRegistryId: Int
  }

  input UpdateDocumentInput {
    name: String
    description: String
    url: String
    acreditionId: Int
    qualifiedRegistryId: Int
  }

  type Mutation {
    createDocument(input: CreateDocumentInput!): Document! @requireAuth
    updateDocument(id: Int!, input: UpdateDocumentInput!): Document!
      @requireAuth
    deleteDocument(id: Int!): Document! @requireAuth
  }
`
