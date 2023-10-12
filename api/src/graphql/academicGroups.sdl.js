export const schema = gql`
  type AcademicGroup {
    id: Int!
    name: String!
    createdAt: DateTime!
    programsOfStudy: [ProgramOfStudy]!
    facultyId: Int
    faculty: Faculty
  }

  type Query {
    academicGroups: [AcademicGroup!]! @requireAuth
    academicGroup(id: Int!): AcademicGroup @requireAuth
  }

  input CreateAcademicGroupInput {
    name: String!
    facultyId: Int
  }

  input UpdateAcademicGroupInput {
    name: String
    facultyId: Int
  }

  type Mutation {
    createAcademicGroup(input: CreateAcademicGroupInput!): AcademicGroup!
      @requireAuth
    updateAcademicGroup(
      id: Int!
      input: UpdateAcademicGroupInput!
    ): AcademicGroup! @requireAuth
    deleteAcademicGroup(id: Int!): AcademicGroup! @requireAuth
  }
`
