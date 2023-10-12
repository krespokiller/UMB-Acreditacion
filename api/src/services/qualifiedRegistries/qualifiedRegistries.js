import { db } from 'src/lib/db'

export const qualifiedRegistries = () => {
  return db.qualifiedRegistry.findMany()
}

export const qualifiedRegistry = ({ id }) => {
  return db.qualifiedRegistry.findUnique({
    where: { id },
  })
}

export const createQualifiedRegistry = ({ input }) => {
  return db.qualifiedRegistry.create({
    data: input,
  })
}

export const updateQualifiedRegistry = ({ id, input }) => {
  return db.qualifiedRegistry.update({
    data: input,
    where: { id },
  })
}

export const deleteQualifiedRegistry = ({ id }) => {
  return db.qualifiedRegistry.delete({
    where: { id },
  })
}

export const QualifiedRegistry = {
  program: (_obj, { root }) => {
    return db.qualifiedRegistry
      .findUnique({ where: { id: root?.id } })
      .program()
  },
  documents: (_obj, { root }) => {
    return db.qualifiedRegistry
      .findUnique({ where: { id: root?.id } })
      .documents()
  },
}
