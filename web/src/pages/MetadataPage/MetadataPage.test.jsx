import { render } from '@redwoodjs/testing/web'

import MetadataPage from './MetadataPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MetadataPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MetadataPage />)
    }).not.toThrow()
  })
})
