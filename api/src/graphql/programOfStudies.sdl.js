export const schema = gql`
  type ProgramOfStudy {
    id: Int!
    name: String!
    body: String!
    image: String!
    description: String!
    active: Boolean!
    programType: programType!
    carrerType: carrerType!
    createdAt: DateTime!
    headQuarterId: Int
    headQuarter: HeadQuarter
    acredition: [Acredition]!
  }

  enum programType {
    PREGRADO
    POSGRADO
  }

  enum carrerType {
    TECNICO
    TECNOLOGO
    PROFESIONAL
    ESPECIALIZACION_TECNICA
    ESPECIALIZACION_TECNOLOGICA
    ESPECIALIZACION_UNIVERSITARIA
    MAESTRIA
    DOCTORADO
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
    programType: programType!
    carrerType: carrerType!
    headQuarterId: Int
  }

  input UpdateProgramOfStudyInput {
    name: String
    body: String
    image: String
    description: String
    active: Boolean
    programType: programType
    carrerType: carrerType
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
