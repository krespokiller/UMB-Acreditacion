import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/ProgramOfStudy/ProgramOfStudiesCell'
import { checkboxInputTag, timeTag, truncate } from 'src/lib/formatters'

const DELETE_PROGRAM_OF_STUDY_MUTATION = gql`
  mutation DeleteProgramOfStudyMutation($id: Int!) {
    deleteProgramOfStudy(id: $id) {
      id
    }
  }
`

const ProgramOfStudiesList = ({ programOfStudies }) => {
  const [deleteProgramOfStudy] = useMutation(DELETE_PROGRAM_OF_STUDY_MUTATION, {
    onCompleted: () => {
      toast.success('ProgramOfStudy deleted')
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
    if (confirm('Are you sure you want to delete programOfStudy ' + id + '?')) {
      deleteProgramOfStudy({ variables: { id } })
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
            <th>Head quarter id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {programOfStudies.map((programOfStudy) => (
            <tr key={programOfStudy.id}>
              <td>{truncate(programOfStudy.id)}</td>
              <td>{truncate(programOfStudy.name)}</td>
              <td>{truncate(programOfStudy.body)}</td>
              <td>{truncate(programOfStudy.image)}</td>
              <td>{truncate(programOfStudy.description)}</td>
              <td>{checkboxInputTag(programOfStudy.active)}</td>
              <td>{timeTag(programOfStudy.createdAt)}</td>
              <td>{truncate(programOfStudy.headQuarterId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.programOfStudy({ id: programOfStudy.id })}
                    title={
                      'Show programOfStudy ' + programOfStudy.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editProgramOfStudy({ id: programOfStudy.id })}
                    title={'Edit programOfStudy ' + programOfStudy.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete programOfStudy ' + programOfStudy.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(programOfStudy.id)}
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

export default ProgramOfStudiesList
