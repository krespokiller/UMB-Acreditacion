import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import FacultyForm from 'src/components/Faculty/FacultyForm'

export const QUERY = gql`
  query EditFacultyById($id: Int!) {
    faculty: faculty(id: $id) {
      id
      name
      createdAt
    }
  }
`
const UPDATE_FACULTY_MUTATION = gql`
  mutation UpdateFacultyMutation($id: Int!, $input: UpdateFacultyInput!) {
    updateFaculty(id: $id, input: $input) {
      id
      name
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ faculty }) => {
  const [updateFaculty, { loading, error }] = useMutation(
    UPDATE_FACULTY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Faculty updated')
        navigate(routes.faculties())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateFaculty({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Faculty {faculty?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <FacultyForm
          faculty={faculty}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
