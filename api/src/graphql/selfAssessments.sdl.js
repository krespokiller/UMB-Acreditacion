export const schema = gql`
  type SelfAssessment {
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
    selfAssessments: [SelfAssessment!]! @requireAuth
    selfAssessment(id: Int!): SelfAssessment @requireAuth
  }

  input CreateSelfAssessmentInput {
    name: String!
    resolution: String
    programId: Int
    expirationDate: DateTime
  }

  input UpdateSelfAssessmentInput {
    name: String
    resolution: String
    programId: Int
    expirationDate: DateTime
  }

  type Mutation {
    createSelfAssessment(input: CreateSelfAssessmentInput!): SelfAssessment!
      @requireAuth
    updateSelfAssessment(
      id: Int!
      input: UpdateSelfAssessmentInput!
    ): SelfAssessment! @requireAuth
    deleteSelfAssessment(id: Int!): SelfAssessment! @requireAuth
  }
`
