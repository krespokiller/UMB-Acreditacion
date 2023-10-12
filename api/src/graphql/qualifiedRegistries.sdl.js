export const schema = gql`
  type QualifiedRegistry {
    id: Int!
    name: String!
    description: String!
    createdAt: DateTime!
    programId: Int
    program: ProgramOfStudy
    documents: [Document]!
  }

  type Query {
    qualifiedRegistries: [QualifiedRegistry!]! @requireAuth
    qualifiedRegistry(id: Int!): QualifiedRegistry @requireAuth
  }

  input CreateQualifiedRegistryInput {
    name: String!
    description: String!
    programId: Int
  }

  input UpdateQualifiedRegistryInput {
    name: String
    description: String
    programId: Int
  }

  type Mutation {
    createQualifiedRegistry(
      input: CreateQualifiedRegistryInput!
    ): QualifiedRegistry! @requireAuth
    updateQualifiedRegistry(
      id: Int!
      input: UpdateQualifiedRegistryInput!
    ): QualifiedRegistry! @requireAuth
    deleteQualifiedRegistry(id: Int!): QualifiedRegistry! @requireAuth
  }
`
