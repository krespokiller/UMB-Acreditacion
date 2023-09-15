import {
  acreditions,
  acredition,
  createAcredition,
  updateAcredition,
  deleteAcredition,
} from './acreditions'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('acreditions', () => {
  scenario('returns all acreditions', async (scenario) => {
    const result = await acreditions()

    expect(result.length).toEqual(Object.keys(scenario.acredition).length)
  })

  scenario('returns a single acredition', async (scenario) => {
    const result = await acredition({ id: scenario.acredition.one.id })

    expect(result).toEqual(scenario.acredition.one)
  })

  scenario('creates a acredition', async () => {
    const result = await createAcredition({
      input: { name: 'String', description: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
  })

  scenario('updates a acredition', async (scenario) => {
    const original = await acredition({
      id: scenario.acredition.one.id,
    })
    const result = await updateAcredition({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a acredition', async (scenario) => {
    const original = await deleteAcredition({
      id: scenario.acredition.one.id,
    })
    const result = await acredition({ id: original.id })

    expect(result).toEqual(null)
  })
})
