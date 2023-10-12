import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Acredition/AcreditionsCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_ACREDITION_MUTATION = gql`
  mutation DeleteAcreditionMutation($id: Int!) {
    deleteAcredition(id: $id) {
      id
    }
  }
`

const AcreditionsList = ({ acreditions }) => {
  const [deleteAcredition] = useMutation(DELETE_ACREDITION_MUTATION, {
    onCompleted: () => {
      toast.success('Acredition deleted')
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
    if (confirm('Are you sure you want to delete acredition ' + id + '?')) {
      deleteAcredition({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Created at</th>
            <th>Program id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {acreditions.map((acredition) => (
            <tr key={acredition.id}>
              <td>{truncate(acredition.id)}</td>
              <td>{truncate(acredition.name)}</td>
              <td>{truncate(acredition.description)}</td>
              <td>{timeTag(acredition.createdAt)}</td>
              <td>{truncate(acredition.programId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.acredition({ id: acredition.id })}
                    title={'Show acredition ' + acredition.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editAcredition({ id: acredition.id })}
                    title={'Edit acredition ' + acredition.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete acredition ' + acredition.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(acredition.id)}
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

export default AcreditionsList
