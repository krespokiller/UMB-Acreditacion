export const schema = gql`
  type HeadQuarter {
    id: Int!
    name: String!
    body: String!
    image: String!
    description: String!
    active: Boolean!
    createdAt: DateTime!
    programOfStudyId: Int
    programOfStudy: ProgramOfStudy
  }

  type Query {
    headQuarters: [HeadQuarter!]! @requireAuth
    headQuarter(id: Int!): HeadQuarter @requireAuth
  }

  input CreateHeadQuarterInput {
    name: String!
    body: String!
    image: String!
    description: String!
    active: Boolean!
    programOfStudyId: Int
  }

  input UpdateHeadQuarterInput {
    name: String
    body: String
    image: String
    description: String
    active: Boolean
    programOfStudyId: Int
  }

  type Mutation {
    createHeadQuarter(input: CreateHeadQuarterInput!): HeadQuarter! @requireAuth
    updateHeadQuarter(id: Int!, input: UpdateHeadQuarterInput!): HeadQuarter!
      @requireAuth
    deleteHeadQuarter(id: Int!): HeadQuarter! @requireAuth
  }
`
