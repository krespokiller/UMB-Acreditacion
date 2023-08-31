import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag, timeTag } from 'src/lib/formatters'

const DELETE_PROGRAM_OF_STUDY_MUTATION = gql`
  mutation DeleteProgramOfStudyMutation($id: Int!) {
    deleteProgramOfStudy(id: $id) {
      id
    }
  }
`

const ProgramOfStudy = ({ programOfStudy }) => {
  const [deleteProgramOfStudy] = useMutation(DELETE_PROGRAM_OF_STUDY_MUTATION, {
    onCompleted: () => {
      toast.success('ProgramOfStudy deleted')
      navigate(routes.programOfStudies())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete programOfStudy ' + id + '?')) {
      deleteProgramOfStudy({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            ProgramOfStudy {programOfStudy.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{programOfStudy.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{programOfStudy.name}</td>
            </tr>
            <tr>
              <th>Body</th>
              <td>{programOfStudy.body}</td>
            </tr>
            <tr>
              <th>Image</th>
              <td>{programOfStudy.image}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{programOfStudy.description}</td>
            </tr>
            <tr>
              <th>Active</th>
              <td>{checkboxInputTag(programOfStudy.active)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(programOfStudy.createdAt)}</td>
            </tr>
            <tr>
              <th>Head quarter id</th>
              <td>{programOfStudy.headQuarterId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editProgramOfStudy({ id: programOfStudy.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(programOfStudy.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default ProgramOfStudy
