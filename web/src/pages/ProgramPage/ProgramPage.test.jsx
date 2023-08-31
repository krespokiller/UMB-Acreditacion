import { render } from '@redwoodjs/testing/web'

import ProgramPage from './ProgramPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ProgramPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProgramPage />)
    }).not.toThrow()
  })
})
