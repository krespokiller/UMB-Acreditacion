import { Link, routes } from '@redwoodjs/router'

import Acreditions from 'src/components/Acredition/Acreditions'
import CustomLoading from 'src/components/CustomLoading/CustomLoading'
export const QUERY = gql`
  query FindAcreditions {
    acreditions {
      id
      name
      createdAt
      resolution
      programId
      expirationDate
    }
  }
`

export const Loading = () => <CustomLoading />

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No acreditions yet. '}
      <Link to={routes.newAcredition()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ acreditions }) => {
  return <Acreditions acreditions={acreditions} />
}
