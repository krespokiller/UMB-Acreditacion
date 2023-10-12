import {
  faculties,
  faculty,
  createFaculty,
  updateFaculty,
  deleteFaculty,
} from './faculties'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('faculties', () => {
  scenario('returns all faculties', async (scenario) => {
    const result = await faculties()

    expect(result.length).toEqual(Object.keys(scenario.faculty).length)
  })

  scenario('returns a single faculty', async (scenario) => {
    const result = await faculty({ id: scenario.faculty.one.id })

    expect(result).toEqual(scenario.faculty.one)
  })

  scenario('creates a faculty', async () => {
    const result = await createFaculty({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a faculty', async (scenario) => {
    const original = await faculty({ id: scenario.faculty.one.id })
    const result = await updateFaculty({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a faculty', async (scenario) => {
    const original = await deleteFaculty({
      id: scenario.faculty.one.id,
    })
    const result = await faculty({ id: original.id })

    expect(result).toEqual(null)
  })
})
