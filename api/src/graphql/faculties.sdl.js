export const schema = gql`
  type Faculty {
    id: Int!
    name: String!
    createdAt: DateTime!
    academicGroups: [AcademicGroup]!
  }

  type Query {
    faculties: [Faculty!]! @requireAuth
    faculty(id: Int!): Faculty @requireAuth
  }

  input CreateFacultyInput {
    name: String!
  }

  input UpdateFacultyInput {
    name: String
  }

  type Mutation {
    createFaculty(input: CreateFacultyInput!): Faculty! @requireAuth
    updateFaculty(id: Int!, input: UpdateFacultyInput!): Faculty! @requireAuth
    deleteFaculty(id: Int!): Faculty! @requireAuth
  }
`
