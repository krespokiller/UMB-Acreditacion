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
    qualifiedRegistry: [QualifiedRegistry]!
    classification: String
    expirationYear: Int
    docenciaServicio: Boolean
    reaccreditationStatus: String
    academicGroupId: Int
    academicGroup: AcademicGroup
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
    searchProgramOfStudies(letters: String!): [ProgramOfStudy!]! @requireAuth
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
    classification: String
    expirationYear: Int
    docenciaServicio: Boolean
    reaccreditationStatus: String
    academicGroupId: Int
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
    classification: String
    expirationYear: Int
    docenciaServicio: Boolean
    reaccreditationStatus: String
    academicGroupId: Int
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
