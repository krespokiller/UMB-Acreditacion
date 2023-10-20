import { Link, routes } from '@redwoodjs/router'

import SelfAssessments from 'src/components/SelfAssessment/SelfAssessments'

export const QUERY = gql`
  query FindSelfAssessments {
    selfAssessments {
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
      {'No selfAssessments yet. '}
      <Link to={routes.newSelfAssessment()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ selfAssessments }) => {
  return <SelfAssessments selfAssessments={selfAssessments} />
}
