import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import AcademicGroupForm from 'src/components/AcademicGroup/AcademicGroupForm'

const CREATE_ACADEMIC_GROUP_MUTATION = gql`
  mutation CreateAcademicGroupMutation($input: CreateAcademicGroupInput!) {
    createAcademicGroup(input: $input) {
      id
    }
  }
`

const NewAcademicGroup = () => {
  const [createAcademicGroup, { loading, error }] = useMutation(
    CREATE_ACADEMIC_GROUP_MUTATION,
    {
      onCompleted: () => {
        toast.success('AcademicGroup created')
        navigate(routes.academicGroups())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createAcademicGroup({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New AcademicGroup</h2>
      </header>
      <div className="rw-segment-main">
        <AcademicGroupForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewAcademicGroup
