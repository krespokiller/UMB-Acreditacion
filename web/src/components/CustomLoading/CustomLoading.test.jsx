import { render } from '@redwoodjs/testing/web'

import CustomLoading from './CustomLoading'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CustomLoading', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CustomLoading />)
    }).not.toThrow()
  })
})
