import {
  selfAssessments,
  selfAssessment,
  createSelfAssessment,
  updateSelfAssessment,
  deleteSelfAssessment,
} from './selfAssessments'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('selfAssessments', () => {
  scenario('returns all selfAssessments', async (scenario) => {
    const result = await selfAssessments()

    expect(result.length).toEqual(Object.keys(scenario.selfAssessment).length)
  })

  scenario('returns a single selfAssessment', async (scenario) => {
    const result = await selfAssessment({
      id: scenario.selfAssessment.one.id,
    })

    expect(result).toEqual(scenario.selfAssessment.one)
  })

  scenario('creates a selfAssessment', async () => {
    const result = await createSelfAssessment({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a selfAssessment', async (scenario) => {
    const original = await selfAssessment({
      id: scenario.selfAssessment.one.id,
    })
    const result = await updateSelfAssessment({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a selfAssessment', async (scenario) => {
    const original = await deleteSelfAssessment({
      id: scenario.selfAssessment.one.id,
    })
    const result = await selfAssessment({ id: original.id })

    expect(result).toEqual(null)
  })
})
