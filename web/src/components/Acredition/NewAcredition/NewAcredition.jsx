import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AcreditionForm from 'src/components/Acredition/AcreditionForm'

const CREATE_ACREDITION_MUTATION = gql`
  mutation CreateAcreditionMutation($input: CreateAcreditionInput!) {
    createAcredition(input: $input) {
      id
    }
  }
`

const NewAcredition = () => {
  const [createAcredition, { loading, error }] = useMutation(
    CREATE_ACREDITION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Acredition created')
        navigate(routes.acreditions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createAcredition({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Acredition</h2>
      </header>
      <div className="rw-segment-main">
        <AcreditionForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAcredition
