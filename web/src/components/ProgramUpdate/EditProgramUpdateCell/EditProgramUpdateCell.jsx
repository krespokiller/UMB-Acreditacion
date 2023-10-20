import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProgramUpdateForm from 'src/components/ProgramUpdate/ProgramUpdateForm'

export const QUERY = gql`
  query EditProgramUpdateById($id: Int!) {
    programUpdate: programUpdate(id: $id) {
      id
      name
      createdAt
      resolution
      programId
      expirationDate
    }
  }
`
const UPDATE_PROGRAM_UPDATE_MUTATION = gql`
  mutation UpdateProgramUpdateMutation(
    $id: Int!
    $input: UpdateProgramUpdateInput!
  ) {
    updateProgramUpdate(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ programUpdate }) => {
  const [updateProgramUpdate, { loading, error }] = useMutation(
    UPDATE_PROGRAM_UPDATE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProgramUpdate updated')
        navigate(routes.programUpdates())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateProgramUpdate({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ProgramUpdate {programUpdate?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ProgramUpdateForm
          programUpdate={programUpdate}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
