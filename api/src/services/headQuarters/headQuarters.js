import { db } from 'src/lib/db'

export const headQuarters = () => {
  return db.headQuarter.findMany()
}

export const headQuarter = ({ id }) => {
  return db.headQuarter.findUnique({
    where: { id },
  })
}

export const createHeadQuarter = ({ input }) => {
  return db.headQuarter.create({
    data: input,
  })
}

export const updateHeadQuarter = ({ id, input }) => {
  return db.headQuarter.update({
    data: input,
    where: { id },
  })
}

export const deleteHeadQuarter = ({ id }) => {
  return db.headQuarter.delete({
    where: { id },
  })
}

export const HeadQuarter = {
  programOfStudy: (_obj, { root }) => {
    return db.headQuarter
      .findUnique({ where: { id: root?.id } })
      .programOfStudy()
  },
}
