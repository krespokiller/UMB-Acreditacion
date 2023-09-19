export const schema = gql`
  type Acredition {
    id: Int!
    name: String!
    description: String!
    createdAt: DateTime!
    documentsRequired: [String]!
    documents: [Document]!
    programId: Int
    program: ProgramOfStudy
  }

  type Query {
    acreditions: [Acredition!]! @requireAuth
    acredition(id: Int!): Acredition @requireAuth
  }

  input CreateAcreditionInput {
    name: String!
    description: String!
    documentsRequired: [String]!
    programId: Int
  }

  input UpdateAcreditionInput {
    name: String
    description: String
    documentsRequired: [String]!
    programId: Int
  }

  type Mutation {
    createAcredition(input: CreateAcreditionInput!): Acredition! @requireAuth
    updateAcredition(id: Int!, input: UpdateAcreditionInput!): Acredition!
      @requireAuth
    deleteAcredition(id: Int!): Acredition! @requireAuth
  }
`
