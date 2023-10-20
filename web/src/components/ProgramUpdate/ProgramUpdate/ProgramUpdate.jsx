import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_PROGRAM_UPDATE_MUTATION = gql`
  mutation DeleteProgramUpdateMutation($id: Int!) {
    deleteProgramUpdate(id: $id) {
      id
    }
  }
`

const ProgramUpdate = ({ programUpdate }) => {
  const [deleteProgramUpdate] = useMutation(DELETE_PROGRAM_UPDATE_MUTATION, {
    onCompleted: () => {
      toast.success('ProgramUpdate deleted')
      navigate(routes.programUpdates())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete programUpdate ' + id + '?')) {
      deleteProgramUpdate({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ProgramUpdate {programUpdate.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{programUpdate.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{programUpdate.name}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(programUpdate.createdAt)}</td>
            </tr>
            <tr>
              <th>Resolution</th>
              <td>{programUpdate.resolution}</td>
            </tr>
            <tr>
              <th>Program id</th>
              <td>{programUpdate.programId}</td>
            </tr>
            <tr>
              <th>Expiration date</th>
              <td>{timeTag(programUpdate.expirationDate)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProgramUpdate({ id: programUpdate.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(programUpdate.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ProgramUpdate
