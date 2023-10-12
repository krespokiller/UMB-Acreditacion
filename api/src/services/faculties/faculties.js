import { db } from 'src/lib/db'

export const faculties = () => {
  return db.faculty.findMany()
}

export const faculty = ({ id }) => {
  return db.faculty.findUnique({
    where: { id },
  })
}

export const createFaculty = ({ input }) => {
  return db.faculty.create({
    data: input,
  })
}

export const updateFaculty = ({ id, input }) => {
  return db.faculty.update({
    data: input,
    where: { id },
  })
}

export const deleteFaculty = ({ id }) => {
  return db.faculty.delete({
    where: { id },
  })
}

export const Faculty = {
  academicGroups: (_obj, { root }) => {
    return db.faculty.findUnique({ where: { id: root?.id } }).academicGroups()
  },
}
