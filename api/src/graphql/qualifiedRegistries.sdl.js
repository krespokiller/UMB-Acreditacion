export const schema = gql`
  type QualifiedRegistry {
    id: Int!
    name: String!
    createdAt: DateTime!
    resolution: String
    programId: Int
    program: ProgramOfStudy
    documents: [Document]!
    expirationDate: DateTime
  }

  type Query {
    qualifiedRegistries: [QualifiedRegistry!]! @requireAuth
    qualifiedRegistry(id: Int!): QualifiedRegistry @requireAuth
  }

  input CreateQualifiedRegistryInput {
    name: String!
    resolution: String
    programId: Int
    expirationDate: DateTime
  }

  input UpdateQualifiedRegistryInput {
    name: String
    resolution: String
    programId: Int
    expirationDate: DateTime
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
