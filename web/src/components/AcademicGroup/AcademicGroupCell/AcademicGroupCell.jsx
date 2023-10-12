import AcademicGroup from 'src/components/AcademicGroup/AcademicGroup'

export const QUERY = gql`
  query FindAcademicGroupById($id: Int!) {
    academicGroup: academicGroup(id: $id) {
      id
      name
      createdAt
      facultyId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>AcademicGroup not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ academicGroup }) => {
  return <AcademicGroup academicGroup={academicGroup} />
}
