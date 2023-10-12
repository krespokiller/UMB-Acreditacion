export const schema = gql`
  type Acredition {
    id: Int!
    name: String!
    description: String!
    createdAt: DateTime!
    programId: Int
    program: ProgramOfStudy
    documents: [Document]!
  }

  type Query {
    acreditions: [Acredition!]! @requireAuth
    acredition(id: Int!): Acredition @requireAuth
  }

  input CreateAcreditionInput {
    name: String!
    description: String!
    programId: Int
  }

  input UpdateAcreditionInput {
    name: String
    description: String
    programId: Int
  }

  type Mutation {
    createAcredition(input: CreateAcreditionInput!): Acredition! @requireAuth
    updateAcredition(id: Int!, input: UpdateAcreditionInput!): Acredition!
      @requireAuth
    deleteAcredition(id: Int!): Acredition! @requireAuth
  }
`
