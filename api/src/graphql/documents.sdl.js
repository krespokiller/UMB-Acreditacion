export const schema = gql`
  type Document {
    id: Int!
    name: String!
    url: String!
    createdAt: DateTime!
    acreditionId: Int
    acredition: Acredition
    qualifiedRegistryId: Int
    qualifiedRegistry: QualifiedRegistry
    selfAssessment: SelfAssessment
    selfAssessmentId: Int
    programUpdate: ProgramUpdate
    programUpdateId: Int
  }

  type Query {
    documents: [Document!]! @requireAuth
    document(id: Int!): Document @requireAuth
  }

  input CreateDocumentInput {
    name: String!
    url: String!
    acreditionId: Int
    qualifiedRegistryId: Int
    selfAssessmentId: Int
    programUpdateId: Int
  }

  input UpdateDocumentInput {
    name: String
    url: String
    acreditionId: Int
    qualifiedRegistryId: Int
    selfAssessmentId: Int
    programUpdateId: Int
  }

  type Mutation {
    createDocument(input: CreateDocumentInput!): Document! @requireAuth
    updateDocument(id: Int!, input: UpdateDocumentInput!): Document!
      @requireAuth
    deleteDocument(id: Int!): Document! @requireAuth
  }
`
