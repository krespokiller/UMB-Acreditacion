import { Link, routes } from '@redwoodjs/router'

import QualifiedRegistries from 'src/components/QualifiedRegistry/QualifiedRegistries'

export const QUERY = gql`
  query FindQualifiedRegistries {
    qualifiedRegistries {
      id
      name
      createdAt
      resolution
      programId
      expirationDate
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No qualifiedRegistries yet. '}
      <Link to={routes.newQualifiedRegistry()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ qualifiedRegistries }) => {
  return <QualifiedRegistries qualifiedRegistries={qualifiedRegistries} />
}
