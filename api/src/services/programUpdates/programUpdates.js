import { db } from 'src/lib/db'

export const programUpdates = () => {
  return db.programUpdate.findMany()
}

export const programUpdate = ({ id }) => {
  return db.programUpdate.findUnique({
    where: { id },
  })
}

export const createProgramUpdate = ({ input }) => {
  return db.programUpdate.create({
    data: input,
  })
}

export const updateProgramUpdate = ({ id, input }) => {
  return db.programUpdate.update({
    data: input,
    where: { id },
  })
}

export const deleteProgramUpdate = ({ id }) => {
  return db.programUpdate.delete({
    where: { id },
  })
}

export const ProgramUpdate = {
  program: (_obj, { root }) => {
    return db.programUpdate.findUnique({ where: { id: root?.id } }).program()
  },
  documents: (_obj, { root }) => {
    return db.programUpdate.findUnique({ where: { id: root?.id } }).documents()
  },
}
