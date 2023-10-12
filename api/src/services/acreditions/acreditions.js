import { db } from 'src/lib/db'

export const acreditions = () => {
  return db.acredition.findMany()
}

export const acredition = ({ id }) => {
  return db.acredition.findUnique({
    where: { id },
  })
}

export const createAcredition = ({ input }) => {
  return db.acredition.create({
    data: input,
  })
}

export const updateAcredition = ({ id, input }) => {
  return db.acredition.update({
    data: input,
    where: { id },
  })
}

export const deleteAcredition = ({ id }) => {
  return db.acredition.delete({
    where: { id },
  })
}

export const Acredition = {
  program: (_obj, { root }) => {
    return db.acredition.findUnique({ where: { id: root?.id } }).program()
  },
  documents: (_obj, { root }) => {
    return db.acredition.findUnique({ where: { id: root?.id } }).documents()
  },
}
