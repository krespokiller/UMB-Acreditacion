import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AcreditionForm from 'src/components/Acredition/AcreditionForm'
import CustomLoading from 'src/components/CustomLoading/CustomLoading'
export const QUERY = gql`
  query EditAcreditionById($id: Int!) {
    acredition: acredition(id: $id) {
      id
      name
      description
      createdAt
      programId
    }
  }
`
const UPDATE_ACREDITION_MUTATION = gql`
  mutation UpdateAcreditionMutation($id: Int!, $input: UpdateAcreditionInput!) {
    updateAcredition(id: $id, input: $input) {
      id
      name
      description
      createdAt
      programId
    }
  }
`

export const Loading = () => <CustomLoading />

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ acredition }) => {
  const [updateAcredition, { loading, error }] = useMutation(
    UPDATE_ACREDITION_MUTATION,
    {
      onCompleted: () => {
        toast.success('Acredition updated')
        navigate(routes.acreditions())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateAcredition({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Acredition {acredition?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <AcreditionForm
          acredition={acredition}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
