import { render } from '@redwoodjs/testing/web'

import ProgramCard from './ProgramCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProgramCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProgramCard />)
    }).not.toThrow()
  })
})
