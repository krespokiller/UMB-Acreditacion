import { db } from 'src/lib/db'

export const documents = () => {
  return db.document.findMany()
}

export const document = ({ id }) => {
  return db.document.findUnique({
    where: { id },
  })
}

export const createDocument = ({ input }) => {
  return db.document.create({
    data: input,
  })
}

export const updateDocument = ({ id, input }) => {
  return db.document.update({
    data: input,
    where: { id },
  })
}

export const deleteDocument = ({ id }) => {
  return db.document.delete({
    where: { id },
  })
}

export const Document = {
  acredition: (_obj, { root }) => {
    return db.document.findUnique({ where: { id: root?.id } }).acredition()
  },
  qualifiedRegistry: (_obj, { root }) => {
    return db.document
      .findUnique({ where: { id: root?.id } })
      .qualifiedRegistry()
  },
}
