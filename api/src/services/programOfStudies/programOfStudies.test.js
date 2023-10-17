import {
  programOfStudies,
  programOfStudy,
  createProgramOfStudy,
  updateProgramOfStudy,
  deleteProgramOfStudy,
  searchProgramOfStudies,
} from './programOfStudies'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('programOfStudies', () => {
  scenario('returns all programOfStudies', async (scenario) => {
    const result = await programOfStudies()

    expect(result.length).toEqual(Object.keys(scenario.programOfStudy).length)
  })

  scenario('returns a single programOfStudy', async (scenario) => {
    const result = await programOfStudy({
      id: scenario.programOfStudy.one.id,
    })

    expect(result).toEqual(scenario.programOfStudy.one)
  })

  scenario('creates a programOfStudy', async () => {
    const result = await createProgramOfStudy({
      input: {
        name: 'String',
        body: 'String',
        image: 'String',
        description: 'String',
        carrerType: 'TECNICO',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.body).toEqual('String')
    expect(result.image).toEqual('String')
    expect(result.description).toEqual('String')
    expect(result.carrerType).toEqual('TECNICO')
  })

  scenario('updates a programOfStudy', async (scenario) => {
    const original = await programOfStudy({
      id: scenario.programOfStudy.one.id,
    })
    const result = await updateProgramOfStudy({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a programOfStudy', async (scenario) => {
    const original = await deleteProgramOfStudy({
      id: scenario.programOfStudy.one.id,
    })
    const result = await programOfStudy({ id: original.id })

    expect(result).toEqual(null)
  })
  scenario(
    'must throw error searching if letters are not provided',
    async () => {
      expect(() => {
        searchProgramOfStudies({ letters: '' })
      }).toThrow('You must provide letters to search for a program of study')
    }
  )
  scenario(
    'returns all programOfStudies that match with letters',
    async (scenario) => {
      const result = await searchProgramOfStudies({ letters: 'med' })
      expect(result.length).toEqual(2)
      expect(result[0].name).toEqual(scenario.programOfStudy.three.name)
      expect(result[1].name).toEqual(scenario.programOfStudy.five.name)
    }
  )
})
