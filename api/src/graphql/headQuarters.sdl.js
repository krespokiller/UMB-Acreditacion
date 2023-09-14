export const schema = gql`
  type HeadQuarter {
    id: Int!
    name: String!
    description: String!
    createdAt: DateTime!
    programsOfStudy: [ProgramOfStudy]!
  }

  type Query {
    headQuarters: [HeadQuarter!]! @requireAuth
    headQuarter(id: Int!): HeadQuarter @requireAuth
  }

  input CreateHeadQuarterInput {
    name: String!
    description: String!
  }

  input UpdateHeadQuarterInput {
    name: String
    description: String
  }

  type Mutation {
    createHeadQuarter(input: CreateHeadQuarterInput!): HeadQuarter! @requireAuth
    updateHeadQuarter(id: Int!, input: UpdateHeadQuarterInput!): HeadQuarter!
      @requireAuth
    deleteHeadQuarter(id: Int!): HeadQuarter! @requireAuth
  }
`
