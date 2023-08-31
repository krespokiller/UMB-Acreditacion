import { render } from '@redwoodjs/testing/web'

import ProgramsOfStudyLayout from './ProgramsOfStudyLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ProgramsOfStudyLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProgramsOfStudyLayout />)
    }).not.toThrow()
  })
})
