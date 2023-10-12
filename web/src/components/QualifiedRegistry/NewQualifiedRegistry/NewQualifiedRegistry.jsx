import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import QualifiedRegistryForm from 'src/components/QualifiedRegistry/QualifiedRegistryForm'

const CREATE_QUALIFIED_REGISTRY_MUTATION = gql`
  mutation CreateQualifiedRegistryMutation(
    $input: CreateQualifiedRegistryInput!
  ) {
    createQualifiedRegistry(input: $input) {
      id
    }
  }
`

const NewQualifiedRegistry = () => {
  const [createQualifiedRegistry, { loading, error }] = useMutation(
    CREATE_QUALIFIED_REGISTRY_MUTATION,
    {
      onCompleted: () => {
        toast.success('QualifiedRegistry created')
        navigate(routes.qualifiedRegistries())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createQualifiedRegistry({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New QualifiedRegistry
        </h2>
      </header>
      <div className="rw-segment-main">
        <QualifiedRegistryForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  )
}

export default NewQualifiedRegistry
