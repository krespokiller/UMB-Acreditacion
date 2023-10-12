import {
  qualifiedRegistries,
  qualifiedRegistry,
  createQualifiedRegistry,
  updateQualifiedRegistry,
  deleteQualifiedRegistry,
} from './qualifiedRegistries'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('qualifiedRegistries', () => {
  scenario('returns all qualifiedRegistries', async (scenario) => {
    const result = await qualifiedRegistries()

    expect(result.length).toEqual(
      Object.keys(scenario.qualifiedRegistry).length
    )
  })

  scenario('returns a single qualifiedRegistry', async (scenario) => {
    const result = await qualifiedRegistry({
      id: scenario.qualifiedRegistry.one.id,
    })

    expect(result).toEqual(scenario.qualifiedRegistry.one)
  })

  scenario('creates a qualifiedRegistry', async () => {
    const result = await createQualifiedRegistry({
      input: { name: 'String', description: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.description).toEqual('String')
  })

  scenario('updates a qualifiedRegistry', async (scenario) => {
    const original = await qualifiedRegistry({
      id: scenario.qualifiedRegistry.one.id,
    })
    const result = await updateQualifiedRegistry({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a qualifiedRegistry', async (scenario) => {
    const original = await deleteQualifiedRegistry({
      id: scenario.qualifiedRegistry.one.id,
    })
    const result = await qualifiedRegistry({ id: original.id })

    expect(result).toEqual(null)
  })
})
