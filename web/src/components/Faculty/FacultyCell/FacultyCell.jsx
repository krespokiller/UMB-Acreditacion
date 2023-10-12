import Faculty from 'src/components/Faculty/Faculty'

export const QUERY = gql`
  query FindFacultyById($id: Int!) {
    faculty: faculty(id: $id) {
      id
      name
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Faculty not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ faculty }) => {
  return <Faculty faculty={faculty} />
}
