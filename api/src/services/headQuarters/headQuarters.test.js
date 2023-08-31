import {
  headQuarters,
  headQuarter,
  createHeadQuarter,
  updateHeadQuarter,
  deleteHeadQuarter,
} from './headQuarters'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('headQuarters', () => {
  scenario('returns all headQuarters', async (scenario) => {
    const result = await headQuarters()

    expect(result.length).toEqual(Object.keys(scenario.headQuarter).length)
  })

  scenario('returns a single headQuarter', async (scenario) => {
    const result = await headQuarter({ id: scenario.headQuarter.one.id })

    expect(result).toEqual(scenario.headQuarter.one)
  })

  scenario('creates a headQuarter', async () => {
    const result = await createHeadQuarter({
      input: {
        name: 'String',
        body: 'String',
        image: 'String',
        description: 'String',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.body).toEqual('String')
    expect(result.image).toEqual('String')
    expect(result.description).toEqual('String')
  })

  scenario('updates a headQuarter', async (scenario) => {
    const original = await headQuarter({
      id: scenario.headQuarter.one.id,
    })
    const result = await updateHeadQuarter({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a headQuarter', async (scenario) => {
    const original = await deleteHeadQuarter({
      id: scenario.headQuarter.one.id,
    })
    const result = await headQuarter({ id: original.id })

    expect(result).toEqual(null)
  })
})
