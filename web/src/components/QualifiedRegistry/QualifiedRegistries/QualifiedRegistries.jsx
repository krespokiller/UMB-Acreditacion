import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/QualifiedRegistry/QualifiedRegistriesCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_QUALIFIED_REGISTRY_MUTATION = gql`
  mutation DeleteQualifiedRegistryMutation($id: Int!) {
    deleteQualifiedRegistry(id: $id) {
      id
    }
  }
`

const QualifiedRegistriesList = ({ qualifiedRegistries }) => {
  const [deleteQualifiedRegistry] = useMutation(
    DELETE_QUALIFIED_REGISTRY_MUTATION,
    {
      onCompleted: () => {
        toast.success('QualifiedRegistry deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
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
          {qualifiedRegistries.map((qualifiedRegistry) => (
            <tr key={qualifiedRegistry.id}>
              <td>{truncate(qualifiedRegistry.id)}</td>
              <td>{truncate(qualifiedRegistry.name)}</td>
              <td>{truncate(qualifiedRegistry.description)}</td>
              <td>{timeTag(qualifiedRegistry.createdAt)}</td>
              <td>{truncate(qualifiedRegistry.programId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.qualifiedRegistry({ id: qualifiedRegistry.id })}
                    title={
                      'Show qualifiedRegistry ' +
                      qualifiedRegistry.id +
                      ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editQualifiedRegistry({
                      id: qualifiedRegistry.id,
                    })}
                    title={'Edit qualifiedRegistry ' + qualifiedRegistry.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete qualifiedRegistry ' + qualifiedRegistry.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(qualifiedRegistry.id)}
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

export default QualifiedRegistriesList
