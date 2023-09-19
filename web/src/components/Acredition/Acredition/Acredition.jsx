import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_ACREDITION_MUTATION = gql`
  mutation DeleteAcreditionMutation($id: Int!) {
    deleteAcredition(id: $id) {
      id
    }
  }
`

const Acredition = ({ acredition }) => {
  const [deleteAcredition] = useMutation(DELETE_ACREDITION_MUTATION, {
    onCompleted: () => {
      toast.success('Acredition deleted')
      navigate(routes.acreditions())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete acredition ' + id + '?')) {
      deleteAcredition({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Acredition {acredition.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{acredition.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{acredition.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{acredition.description}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(acredition.createdAt)}</td>
            </tr>
            <tr>
              <th>Documents required</th>
              <td>{acredition.documentsRequired}</td>
            </tr>
            <tr>
              <th>Program id</th>
              <td>{acredition.programId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editAcredition({ id: acredition.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(acredition.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Acredition
