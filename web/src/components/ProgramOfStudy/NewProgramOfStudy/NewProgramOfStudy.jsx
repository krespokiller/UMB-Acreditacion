import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ProgramOfStudyForm from 'src/components/ProgramOfStudy/ProgramOfStudyForm'

const CREATE_PROGRAM_OF_STUDY_MUTATION = gql`
  mutation CreateProgramOfStudyMutation($input: CreateProgramOfStudyInput!) {
    createProgramOfStudy(input: $input) {
      id
    }
  }
`

const NewProgramOfStudy = () => {
  const [createProgramOfStudy, { loading, error }] = useMutation(
    CREATE_PROGRAM_OF_STUDY_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProgramOfStudy created')
        navigate(routes.programOfStudies())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createProgramOfStudy({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New ProgramOfStudy</h2>
      </header>
      <div className="rw-segment-main">
        <ProgramOfStudyForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewProgramOfStudy
