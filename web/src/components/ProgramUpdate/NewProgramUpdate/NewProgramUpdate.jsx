import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProgramUpdateForm from 'src/components/ProgramUpdate/ProgramUpdateForm'

const CREATE_PROGRAM_UPDATE_MUTATION = gql`
  mutation CreateProgramUpdateMutation($input: CreateProgramUpdateInput!) {
    createProgramUpdate(input: $input) {
      id
    }
  }
`

const NewProgramUpdate = () => {
  const [createProgramUpdate, { loading, error }] = useMutation(
    CREATE_PROGRAM_UPDATE_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProgramUpdate created')
        navigate(routes.programUpdates())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createProgramUpdate({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ProgramUpdate</h2>
      </header>
      <div className="rw-segment-main">
        <ProgramUpdateForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewProgramUpdate
