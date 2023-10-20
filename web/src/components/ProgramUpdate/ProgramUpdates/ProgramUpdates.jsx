import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/ProgramUpdate/ProgramUpdatesCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_PROGRAM_UPDATE_MUTATION = gql`
  mutation DeleteProgramUpdateMutation($id: Int!) {
    deleteProgramUpdate(id: $id) {
      id
    }
  }
`

const ProgramUpdatesList = ({ programUpdates }) => {
  const [deleteProgramUpdate] = useMutation(DELETE_PROGRAM_UPDATE_MUTATION, {
    onCompleted: () => {
      toast.success('ProgramUpdate deleted')
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
    if (confirm('Are you sure you want to delete programUpdate ' + id + '?')) {
      deleteProgramUpdate({ variables: { id } })
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
            <th>Resolution</th>
            <th>Program id</th>
            <th>Expiration date</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {programUpdates.map((programUpdate) => (
            <tr key={programUpdate.id}>
              <td>{truncate(programUpdate.id)}</td>
              <td>{truncate(programUpdate.name)}</td>
              <td>{timeTag(programUpdate.createdAt)}</td>
              <td>{truncate(programUpdate.resolution)}</td>
              <td>{truncate(programUpdate.programId)}</td>
              <td>{timeTag(programUpdate.expirationDate)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.programUpdate({ id: programUpdate.id })}
                    title={'Show programUpdate ' + programUpdate.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editProgramUpdate({ id: programUpdate.id })}
                    title={'Edit programUpdate ' + programUpdate.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete programUpdate ' + programUpdate.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(programUpdate.id)}
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

export default ProgramUpdatesList
