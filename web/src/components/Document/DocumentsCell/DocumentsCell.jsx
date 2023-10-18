import { Link, routes } from '@redwoodjs/router'

import CustomLoading from 'src/components/CustomLoading/CustomLoading'
import Documents from 'src/components/Document/Documents'
export const QUERY = gql`
  query FindDocuments {
    documents {
      id
      name
      description
      url
      createdAt
      acreditionId
      qualifiedRegistryId
    }
  }
`

export const Loading = () => <CustomLoading />

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No documents yet. '}
      <Link to={routes.newDocument()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ documents }) => {
  return <Documents documents={documents} />
}
