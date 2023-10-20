export const schema = gql`
  type Acredition {
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
    acreditions: [Acredition!]! @requireAuth
    acredition(id: Int!): Acredition @requireAuth
  }

  input CreateAcreditionInput {
    name: String!
    resolution: String
    programId: Int
    expirationDate: DateTime
  }

  input UpdateAcreditionInput {
    name: String
    resolution: String
    programId: Int
    expirationDate: DateTime
  }

  type Mutation {
    createAcredition(input: CreateAcreditionInput!): Acredition! @requireAuth
    updateAcredition(id: Int!, input: UpdateAcreditionInput!): Acredition!
      @requireAuth
    deleteAcredition(id: Int!): Acredition! @requireAuth
  }
`
