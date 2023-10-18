import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AcademicGroupForm from 'src/components/AcademicGroup/AcademicGroupForm'
import CustomLoading from 'src/components/CustomLoading/CustomLoading'
export const QUERY = gql`
  query EditAcademicGroupById($id: Int!) {
    academicGroup: academicGroup(id: $id) {
      id
      name
      createdAt
      facultyId
    }
  }
`
const UPDATE_ACADEMIC_GROUP_MUTATION = gql`
  mutation UpdateAcademicGroupMutation(
    $id: Int!
    $input: UpdateAcademicGroupInput!
  ) {
    updateAcademicGroup(id: $id, input: $input) {
      id
      name
      createdAt
      facultyId
    }
  }
`

export const Loading = () => <CustomLoading />

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ academicGroup }) => {
  const [updateAcademicGroup, { loading, error }] = useMutation(
    UPDATE_ACADEMIC_GROUP_MUTATION,
    {
      onCompleted: () => {
        toast.success('AcademicGroup updated')
        navigate(routes.academicGroups())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateAcademicGroup({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit AcademicGroup {academicGroup?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <AcademicGroupForm
          academicGroup={academicGroup}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
