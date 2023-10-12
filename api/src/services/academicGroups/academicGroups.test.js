import {
  academicGroups,
  academicGroup,
  createAcademicGroup,
  updateAcademicGroup,
  deleteAcademicGroup,
} from './academicGroups'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('academicGroups', () => {
  scenario('returns all academicGroups', async (scenario) => {
    const result = await academicGroups()

    expect(result.length).toEqual(Object.keys(scenario.academicGroup).length)
  })

  scenario('returns a single academicGroup', async (scenario) => {
    const result = await academicGroup({ id: scenario.academicGroup.one.id })

    expect(result).toEqual(scenario.academicGroup.one)
  })

  scenario('creates a academicGroup', async () => {
    const result = await createAcademicGroup({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a academicGroup', async (scenario) => {
    const original = await academicGroup({
      id: scenario.academicGroup.one.id,
    })
    const result = await updateAcademicGroup({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a academicGroup', async (scenario) => {
    const original = await deleteAcademicGroup({
      id: scenario.academicGroup.one.id,
    })
    const result = await academicGroup({ id: original.id })

    expect(result).toEqual(null)
  })
})
