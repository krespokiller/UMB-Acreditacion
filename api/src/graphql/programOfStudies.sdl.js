export const schema = gql`
  type ProgramOfStudy {
    id: Int!
    name: String!
    body: String!
    image: String!
    description: String!
    active: Boolean!
    createdAt: DateTime!
    headQuarterId: Int
    headQuarter: HeadQuarter
  }

  type Query {
    programOfStudies: [ProgramOfStudy!]! @requireAuth
    programOfStudy(id: Int!): ProgramOfStudy @requireAuth
  }

  input CreateProgramOfStudyInput {
    name: String!
    body: String!
    image: String!
    description: String!
    active: Boolean!
    headQuarterId: Int
  }

  input UpdateProgramOfStudyInput {
    name: String
    body: String
    image: String
    description: String
    active: Boolean
    headQuarterId: Int
  }

  type Mutation {
    createProgramOfStudy(input: CreateProgramOfStudyInput!): ProgramOfStudy!
      @requireAuth
    updateProgramOfStudy(
      id: Int!
      input: UpdateProgramOfStudyInput!
    ): ProgramOfStudy! @requireAuth
    deleteProgramOfStudy(id: Int!): ProgramOfStudy! @requireAuth
  }
`
