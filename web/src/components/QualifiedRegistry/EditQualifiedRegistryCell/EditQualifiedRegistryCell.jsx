import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import QualifiedRegistryForm from 'src/components/QualifiedRegistry/QualifiedRegistryForm'

export const QUERY = gql`
  query EditQualifiedRegistryById($id: Int!) {
    qualifiedRegistry: qualifiedRegistry(id: $id) {
      id
      name
      description
      createdAt
      programId
    }
  }
`
const UPDATE_QUALIFIED_REGISTRY_MUTATION = gql`
  mutation UpdateQualifiedRegistryMutation(
    $id: Int!
    $input: UpdateQualifiedRegistryInput!
  ) {
    updateQualifiedRegistry(id: $id, input: $input) {
      id
      name
      description
      createdAt
      programId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ qualifiedRegistry }) => {
  const [updateQualifiedRegistry, { loading, error }] = useMutation(
    UPDATE_QUALIFIED_REGISTRY_MUTATION,
    {
      onCompleted: () => {
        toast.success('QualifiedRegistry updated')
        navigate(routes.qualifiedRegistries())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateQualifiedRegistry({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit QualifiedRegistry {qualifiedRegistry?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <QualifiedRegistryForm
          qualifiedRegistry={qualifiedRegistry}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
