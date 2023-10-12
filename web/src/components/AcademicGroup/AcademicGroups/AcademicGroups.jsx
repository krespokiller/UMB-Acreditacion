import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/AcademicGroup/AcademicGroupsCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_ACADEMIC_GROUP_MUTATION = gql`
  mutation DeleteAcademicGroupMutation($id: Int!) {
    deleteAcademicGroup(id: $id) {
      id
    }
  }
`

const AcademicGroupsList = ({ academicGroups }) => {
  const [deleteAcademicGroup] = useMutation(DELETE_ACADEMIC_GROUP_MUTATION, {
    onCompleted: () => {
      toast.success('AcademicGroup deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete academicGroup ' + id + '?')) {
      deleteAcademicGroup({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Created at</th>
            <th>Faculty id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {academicGroups.map((academicGroup) => (
            <tr key={academicGroup.id}>
              <td>{truncate(academicGroup.id)}</td>
              <td>{truncate(academicGroup.name)}</td>
              <td>{timeTag(academicGroup.createdAt)}</td>
              <td>{truncate(academicGroup.facultyId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.academicGroup({ id: academicGroup.id })}
                    title={'Show academicGroup ' + academicGroup.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAcademicGroup({ id: academicGroup.id })}
                    title={'Edit academicGroup ' + academicGroup.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete academicGroup ' + academicGroup.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(academicGroup.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AcademicGroupsList
