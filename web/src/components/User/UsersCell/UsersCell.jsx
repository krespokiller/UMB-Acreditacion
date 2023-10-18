import { Link, routes } from '@redwoodjs/router'

import CustomLoading from 'src/components/CustomLoading/CustomLoading'
import Users from 'src/components/User/Users'
export const QUERY = gql`
  query FindUsers {
    users {
      id
      name
      email
      role
      hashedPassword
      salt
      resetToken
      resetTokenExpiresAt
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <CustomLoading />

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No users yet. '}
      <Link to={routes.newUser()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ users }) => {
  return <Users users={users} />
}
