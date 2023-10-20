import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/SelfAssessment/SelfAssessmentsCell'
import { timeTag, truncate } from 'src/lib/formatters'

const DELETE_SELF_ASSESSMENT_MUTATION = gql`
  mutation DeleteSelfAssessmentMutation($id: Int!) {
    deleteSelfAssessment(id: $id) {
      id
    }
  }
`

const SelfAssessmentsList = ({ selfAssessments }) => {
  const [deleteSelfAssessment] = useMutation(DELETE_SELF_ASSESSMENT_MUTATION, {
    onCompleted: () => {
      toast.success('SelfAssessment deleted')
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
    if (confirm('Are you sure you want to delete selfAssessment ' + id + '?')) {
      deleteSelfAssessment({ variables: { id } })
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
          {selfAssessments.map((selfAssessment) => (
            <tr key={selfAssessment.id}>
              <td>{truncate(selfAssessment.id)}</td>
              <td>{truncate(selfAssessment.name)}</td>
              <td>{timeTag(selfAssessment.createdAt)}</td>
              <td>{truncate(selfAssessment.resolution)}</td>
              <td>{truncate(selfAssessment.programId)}</td>
              <td>{timeTag(selfAssessment.expirationDate)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.selfAssessment({ id: selfAssessment.id })}
                    title={
                      'Show selfAssessment ' + selfAssessment.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editSelfAssessment({ id: selfAssessment.id })}
                    title={'Edit selfAssessment ' + selfAssessment.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete selfAssessment ' + selfAssessment.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(selfAssessment.id)}
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

export default SelfAssessmentsList
