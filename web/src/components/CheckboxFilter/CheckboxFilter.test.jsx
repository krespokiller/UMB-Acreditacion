import { render } from '@redwoodjs/testing/web'

import CheckboxFilter from './CheckboxFilter'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CheckboxFilter', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CheckboxFilter />)
    }).not.toThrow()
  })
})
