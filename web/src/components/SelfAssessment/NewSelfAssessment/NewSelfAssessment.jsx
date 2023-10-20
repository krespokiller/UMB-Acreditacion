import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SelfAssessmentForm from 'src/components/SelfAssessment/SelfAssessmentForm'

const CREATE_SELF_ASSESSMENT_MUTATION = gql`
  mutation CreateSelfAssessmentMutation($input: CreateSelfAssessmentInput!) {
    createSelfAssessment(input: $input) {
      id
    }
  }
`

const NewSelfAssessment = () => {
  const [createSelfAssessment, { loading, error }] = useMutation(
    CREATE_SELF_ASSESSMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('SelfAssessment created')
        navigate(routes.selfAssessments())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createSelfAssessment({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New SelfAssessment</h2>
      </header>
      <div className="rw-segment-main">
        <SelfAssessmentForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSelfAssessment
