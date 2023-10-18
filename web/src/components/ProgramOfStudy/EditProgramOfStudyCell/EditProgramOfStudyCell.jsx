import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CustomLoading from 'src/components/CustomLoading/CustomLoading'
import ProgramOfStudyForm from 'src/components/ProgramOfStudy/ProgramOfStudyForm'
export const QUERY = gql`
  query EditProgramOfStudyById($id: Int!) {
    programOfStudy: programOfStudy(id: $id) {
      id
      name
      body
      image
      description
      active
      programType
      carrerType
      createdAt
      headQuarterId
      classification
      expirationYear
      docenciaServicio
      reaccreditationStatus
      academicGroupId
    }
  }
`
const UPDATE_PROGRAM_OF_STUDY_MUTATION = gql`
  mutation UpdateProgramOfStudyMutation(
    $id: Int!
    $input: UpdateProgramOfStudyInput!
  ) {
    updateProgramOfStudy(id: $id, input: $input) {
      id
      name
      body
      image
      description
      active
      programType
      carrerType
      createdAt
      headQuarterId
      classification
      expirationYear
      docenciaServicio
      reaccreditationStatus
      academicGroupId
    }
  }
`

export const Loading = () => <CustomLoading />

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ programOfStudy }) => {
  const [updateProgramOfStudy, { loading, error }] = useMutation(
    UPDATE_PROGRAM_OF_STUDY_MUTATION,
    {
      onCompleted: () => {
        toast.success('ProgramOfStudy updated')
        navigate(routes.programOfStudies())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateProgramOfStudy({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ProgramOfStudy {programOfStudy?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ProgramOfStudyForm
          programOfStudy={programOfStudy}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
