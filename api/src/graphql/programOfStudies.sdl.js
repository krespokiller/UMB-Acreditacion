export const schema = gql`
  type ProgramOfStudy {
    id: Int!
    name: String!
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
    classification: clasificationType
    docenciaServicio: Boolean
    reaccreditationStatus: String
    sniesCode: String
    coursesNumber: Int
    credits: Int
    spaceAvailable: Int
    duration: Int
    admissionPeriod: Int
    academicGroupId: Int
    academicGroup: AcademicGroup
    selfAssessment: [SelfAssessment]!
    programUpdate: [ProgramUpdate]!
  }
  type estatusSAC {
    acredition: [Acredition]!
    qualifiedRegistry: [QualifiedRegistry]!
    selfAssessment: [SelfAssessment]!
    programUpdate: [ProgramUpdate]!
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

  enum clasificationType {
    ACREDITADO
    ENESPERA
    PROYECTADO
  }

  type Query {
    programOfStudies: [ProgramOfStudy!]! @requireAuth
    programOfStudy(id: Int!): ProgramOfStudy @requireAuth
    estatusSAC(id: Int!): estatusSAC @requireAuth
    searchProgramOfStudies(letters: String!): [ProgramOfStudy!]! @requireAuth
  }

  input CreateProgramOfStudyInput {
    name: String!
    image: String!
    description: String!
    active: Boolean!
    programType: programType!
    carrerType: carrerType!
    headQuarterId: Int
    classification: clasificationType
    docenciaServicio: Boolean
    reaccreditationStatus: String
    credits: Int
    sniesCode: String
    coursesNumber: Int
    academicGroupId: Int
  }

  input UpdateProgramOfStudyInput {
    name: String
    image: String
    description: String
    active: Boolean
    programType: programType
    carrerType: carrerType
    headQuarterId: Int
    classification: clasificationType
    docenciaServicio: Boolean
    reaccreditationStatus: String
    credits: Int
    sniesCode: String
    coursesNumber: Int
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
