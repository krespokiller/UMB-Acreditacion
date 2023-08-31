import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/HeadQuarter/HeadQuartersCell'
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters'

const DELETE_HEAD_QUARTER_MUTATION = gql`
  mutation DeleteHeadQuarterMutation($id: Int!) {
    deleteHeadQuarter(id: $id) {
      id
    }
  }
`

const HeadQuartersList = ({ headQuarters }) => {
  const [deleteHeadQuarter] = useMutation(DELETE_HEAD_QUARTER_MUTATION, {
    onCompleted: () => {
      toast.success('HeadQuarter deleted')
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
    if (confirm('Are you sure you want to delete headQuarter ' + id + '?')) {
      deleteHeadQuarter({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Body</th>
            <th>Image</th>
            <th>Description</th>
            <th>Active</th>
            <th>Created at</th>
            <th>Program of study id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {headQuarters.map((headQuarter) => (
            <tr key={headQuarter.id}>
              <td>{truncate(headQuarter.id)}</td>
              <td>{truncate(headQuarter.name)}</td>
              <td>{truncate(headQuarter.body)}</td>
              <td>{truncate(headQuarter.image)}</td>
              <td>{truncate(headQuarter.description)}</td>
              <td>{checkboxInputTag(headQuarter.active)}</td>
              <td>{timeTag(headQuarter.createdAt)}</td>
              <td>{truncate(headQuarter.programOfStudyId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.headQuarter({ id: headQuarter.id })}
                    title={'Show headQuarter ' + headQuarter.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editHeadQuarter({ id: headQuarter.id })}
                    title={'Edit headQuarter ' + headQuarter.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete headQuarter ' + headQuarter.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(headQuarter.id)}
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

export default HeadQuartersList
