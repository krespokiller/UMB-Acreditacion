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

export const ProgramOfStudy = {
  headQuarter: (_obj, { root }) => {
    return db.programOfStudy
      .findUnique({ where: { id: root?.id } })
      .headQuarter()
  },
}
