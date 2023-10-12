import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_QUALIFIED_REGISTRY_MUTATION = gql`
  mutation DeleteQualifiedRegistryMutation($id: Int!) {
    deleteQualifiedRegistry(id: $id) {
      id
    }
  }
`

const QualifiedRegistry = ({ qualifiedRegistry }) => {
  const [deleteQualifiedRegistry] = useMutation(
    DELETE_QUALIFIED_REGISTRY_MUTATION,
    {
      onCompleted: () => {
        toast.success('QualifiedRegistry deleted')
        navigate(routes.qualifiedRegistries())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onDeleteClick = (id) => {
    if (
      confirm('Are you sure you want to delete qualifiedRegistry ' + id + '?')
    ) {
      deleteQualifiedRegistry({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            QualifiedRegistry {qualifiedRegistry.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{qualifiedRegistry.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{qualifiedRegistry.name}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{qualifiedRegistry.description}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(qualifiedRegistry.createdAt)}</td>
            </tr>
            <tr>
              <th>Program id</th>
              <td>{qualifiedRegistry.programId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editQualifiedRegistry({ id: qualifiedRegistry.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(qualifiedRegistry.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default QualifiedRegistry
