import { Link, routes } from '@redwoodjs/router'

import AcademicGroups from 'src/components/AcademicGroup/AcademicGroups'

export const QUERY = gql`
  query FindAcademicGroups {
    academicGroups {
      id
      name
      createdAt
      facultyId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No academicGroups yet. '}
      <Link to={routes.newAcademicGroup()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ academicGroups }) => {
  return <AcademicGroups academicGroups={academicGroups} />
}
