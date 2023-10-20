import {
  programUpdates,
  programUpdate,
  createProgramUpdate,
  updateProgramUpdate,
  deleteProgramUpdate,
} from './programUpdates'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('programUpdates', () => {
  scenario('returns all programUpdates', async (scenario) => {
    const result = await programUpdates()

    expect(result.length).toEqual(Object.keys(scenario.programUpdate).length)
  })

  scenario('returns a single programUpdate', async (scenario) => {
    const result = await programUpdate({ id: scenario.programUpdate.one.id })

    expect(result).toEqual(scenario.programUpdate.one)
  })

  scenario('creates a programUpdate', async () => {
    const result = await createProgramUpdate({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a programUpdate', async (scenario) => {
    const original = await programUpdate({
      id: scenario.programUpdate.one.id,
    })
    const result = await updateProgramUpdate({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a programUpdate', async (scenario) => {
    const original = await deleteProgramUpdate({
      id: scenario.programUpdate.one.id,
    })
    const result = await programUpdate({ id: original.id })

    expect(result).toEqual(null)
  })
})
