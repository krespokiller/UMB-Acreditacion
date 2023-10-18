import { Link, routes } from '@redwoodjs/router'

import CustomLoading from 'src/components/CustomLoading/CustomLoading'
import HeadQuarters from 'src/components/HeadQuarter/HeadQuarters'
export const QUERY = gql`
  query FindHeadQuarters {
    headQuarters {
      id
      name
      description
      createdAt
    }
  }
`

export const Loading = () => <CustomLoading />

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No headQuarters yet. '}
      <Link to={routes.newHeadQuarter()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ headQuarters }) => {
  return <HeadQuarters headQuarters={headQuarters} />
}
