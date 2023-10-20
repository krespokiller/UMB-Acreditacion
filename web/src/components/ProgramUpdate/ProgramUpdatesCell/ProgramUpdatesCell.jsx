import { Link, routes } from '@redwoodjs/router'

import ProgramUpdates from 'src/components/ProgramUpdate/ProgramUpdates'

export const QUERY = gql`
  query FindProgramUpdates {
    programUpdates {
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
      {'No programUpdates yet. '}
      <Link to={routes.newProgramUpdate()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ programUpdates }) => {
  return <ProgramUpdates programUpdates={programUpdates} />
}
