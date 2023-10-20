import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SelfAssessmentForm from 'src/components/SelfAssessment/SelfAssessmentForm'

export const QUERY = gql`
  query EditSelfAssessmentById($id: Int!) {
    selfAssessment: selfAssessment(id: $id) {
      id
      name
      createdAt
      resolution
      programId
      expirationDate
    }
  }
`
const UPDATE_SELF_ASSESSMENT_MUTATION = gql`
  mutation UpdateSelfAssessmentMutation(
    $id: Int!
    $input: UpdateSelfAssessmentInput!
  ) {
    updateSelfAssessment(id: $id, input: $input) {
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

export const Success = ({ selfAssessment }) => {
  const [updateSelfAssessment, { loading, error }] = useMutation(
    UPDATE_SELF_ASSESSMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('SelfAssessment updated')
        navigate(routes.selfAssessments())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateSelfAssessment({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit SelfAssessment {selfAssessment?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <SelfAssessmentForm
          selfAssessment={selfAssessment}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
