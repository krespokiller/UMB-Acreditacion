import { db } from 'src/lib/db'

export const programOfStudies = () => {
  return db.programOfStudy.findMany()
}

export const programOfStudy = ({ id }) => {
  return db.programOfStudy.findUnique({
    where: { id },
  })
}

export const createProgramOfStudy = ({ input }) => {
  return db.programOfStudy.create({
    data: input,
  })
}

export const updateProgramOfStudy = ({ id, input }) => {
  return db.programOfStudy.update({
    data: input,
    where: { id },
  })
}

export const deleteProgramOfStudy = ({ id }) => {
  return db.programOfStudy.delete({
    where: { id },
  })
}
export const searchProgramOfStudies = ({ letters }) => {
  if (!letters || letters === '') {
    throw new Error('You must provide letters to search for a program of study')
  }
  return db.programOfStudy.findMany({
    where: {
      name: {
        contains: letters,
        mode: 'insensitive', // This makes the search case-insensitive
      },
    },
    include: {
      headQuarter: true,
      acredition: {
        include: {
          documents: true,
        },
      },
      qualifiedRegistry: {
        include: {
          documents: true,
        },
      },
      academicGroup: {
        include: {
          faculty: true,
        },
      },
    },
  })
}
export const estatusSAC = ({ id }) => {
  return db.programOfStudy.findUnique({
    where: { id: id },
    include: {
      acredition: {
        include: {
          documents: true,
        },
      },
      qualifiedRegistry: {
        include: {
          documents: true,
        },
      },
      academicGroup: {
        include: {
          faculty: true,
        },
      },
      selfAssessment: {
        include: {
          documents: true,
        },
      },
      programUpdate: {
        include: {
          documents: true,
        },
      },
    },
  })
}

export const ProgramOfStudy = {
  headQuarter: (_obj, { root }) => {
    return db.programOfStudy
      .findUnique({ where: { id: root?.id } })
      .headQuarter()
  },
  acredition: (_obj, { root }) => {
    return db.programOfStudy
      .findUnique({ where: { id: root?.id } })
      .acredition()
  },
  qualifiedRegistry: (_obj, { root }) => {
    return db.programOfStudy
      .findUnique({ where: { id: root?.id } })
      .qualifiedRegistry()
  },
  academicGroup: (_obj, { root }) => {
    return db.programOfStudy
      .findUnique({ where: { id: root?.id } })
      .academicGroup()
  },
}
