export const schema = gql`
  type ProgramUpdate {
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
    programUpdates: [ProgramUpdate!]! @requireAuth
    programUpdate(id: Int!): ProgramUpdate @requireAuth
  }

  input CreateProgramUpdateInput {
    name: String!
    resolution: String
    programId: Int
    expirationDate: DateTime
  }

  input UpdateProgramUpdateInput {
    name: String
    resolution: String
    programId: Int
    expirationDate: DateTime
  }

  type Mutation {
    createProgramUpdate(input: CreateProgramUpdateInput!): ProgramUpdate!
      @requireAuth
    updateProgramUpdate(
      id: Int!
      input: UpdateProgramUpdateInput!
    ): ProgramUpdate! @requireAuth
    deleteProgramUpdate(id: Int!): ProgramUpdate! @requireAuth
  }
`
