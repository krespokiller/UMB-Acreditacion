import { db } from 'src/lib/db'

export const academicGroups = () => {
  return db.academicGroup.findMany()
}

export const academicGroup = ({ id }) => {
  return db.academicGroup.findUnique({
    where: { id },
  })
}

export const createAcademicGroup = ({ input }) => {
  return db.academicGroup.create({
    data: input,
  })
}

export const updateAcademicGroup = ({ id, input }) => {
  return db.academicGroup.update({
    data: input,
    where: { id },
  })
}

export const deleteAcademicGroup = ({ id }) => {
  return db.academicGroup.delete({
    where: { id },
  })
}

export const AcademicGroup = {
  programsOfStudy: (_obj, { root }) => {
    return db.academicGroup
      .findUnique({ where: { id: root?.id } })
      .programsOfStudy()
  },
  faculty: (_obj, { root }) => {
    return db.academicGroup.findUnique({ where: { id: root?.id } }).faculty()
  },
}
