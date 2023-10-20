import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_DOCUMENT_MUTATION = gql`
  mutation DeleteDocumentMutation($id: Int!) {
    deleteDocument(id: $id) {
      id
    }
  }
`

const Document = ({ document }) => {
  const [deleteDocument] = useMutation(DELETE_DOCUMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Document deleted')
      navigate(routes.documents())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete document ' + id + '?')) {
      deleteDocument({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Document {document.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{document.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{document.name}</td>
            </tr>
            <tr>
              <th>Url</th>
              <td>{document.url}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(document.createdAt)}</td>
            </tr>
            <tr>
              <th>Acredition id</th>
              <td>{document.acreditionId}</td>
            </tr>
            <tr>
              <th>Qualified registry id</th>
              <td>{document.qualifiedRegistryId}</td>
            </tr>
            <tr>
              <th>Self assessment id</th>
              <td>{document.selfAssessmentId}</td>
            </tr>
            <tr>
              <th>Program update id</th>
              <td>{document.programUpdateId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editDocument({ id: document.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(document.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Document
