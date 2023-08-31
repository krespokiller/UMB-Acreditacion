import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, timeTag } from 'src/lib/formatters'

const DELETE_HEAD_QUARTER_MUTATION = gql`
  mutation DeleteHeadQuarterMutation($id: Int!) {
    deleteHeadQuarter(id: $id) {
      id
    }
  }
`

const HeadQuarter = ({ headQuarter }) => {
  const [deleteHeadQuarter] = useMutation(DELETE_HEAD_QUARTER_MUTATION, {
    onCompleted: () => {
      toast.success('HeadQuarter deleted')
      navigate(routes.headQuarters())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete headQuarter ' + id + '?')) {
      deleteHeadQuarter({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            HeadQuarter {headQuarter.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{headQuarter.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{headQuarter.name}</td>
            </tr>
            <tr>
              <th>Body</th>
              <td>{headQuarter.body}</td>
            </tr>
            <tr>
              <th>Image</th>
              <td>{headQuarter.image}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{headQuarter.description}</td>
            </tr>
            <tr>
              <th>Active</th>
              <td>{checkboxInputTag(headQuarter.active)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(headQuarter.createdAt)}</td>
            </tr>
            <tr>
              <th>Program of study id</th>
              <td>{headQuarter.programOfStudyId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editHeadQuarter({ id: headQuarter.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(headQuarter.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default HeadQuarter
