import { db } from 'src/lib/db'

export const selfAssessments = () => {
  return db.selfAssessment.findMany()
}

export const selfAssessment = ({ id }) => {
  return db.selfAssessment.findUnique({
    where: { id },
  })
}

export const createSelfAssessment = ({ input }) => {
  return db.selfAssessment.create({
    data: input,
  })
}

export const updateSelfAssessment = ({ id, input }) => {
  return db.selfAssessment.update({
    data: input,
    where: { id },
  })
}

export const deleteSelfAssessment = ({ id }) => {
  return db.selfAssessment.delete({
    where: { id },
  })
}

export const SelfAssessment = {
  program: (_obj, { root }) => {
    return db.selfAssessment.findUnique({ where: { id: root?.id } }).program()
  },
  documents: (_obj, { root }) => {
    return db.selfAssessment.findUnique({ where: { id: root?.id } }).documents()
  },
}
