import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { timeTag } from 'src/lib/formatters'

const DELETE_SELF_ASSESSMENT_MUTATION = gql`
  mutation DeleteSelfAssessmentMutation($id: Int!) {
    deleteSelfAssessment(id: $id) {
      id
    }
  }
`

const SelfAssessment = ({ selfAssessment }) => {
  const [deleteSelfAssessment] = useMutation(DELETE_SELF_ASSESSMENT_MUTATION, {
    onCompleted: () => {
      toast.success('SelfAssessment deleted')
      navigate(routes.selfAssessments())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete selfAssessment ' + id + '?')) {
      deleteSelfAssessment({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            SelfAssessment {selfAssessment.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{selfAssessment.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{selfAssessment.name}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(selfAssessment.createdAt)}</td>
            </tr>
            <tr>
              <th>Resolution</th>
              <td>{selfAssessment.resolution}</td>
            </tr>
            <tr>
              <th>Program id</th>
              <td>{selfAssessment.programId}</td>
            </tr>
            <tr>
              <th>Expiration date</th>
              <td>{timeTag(selfAssessment.expirationDate)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSelfAssessment({ id: selfAssessment.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(selfAssessment.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default SelfAssessment
