import ProgramUpdate from 'src/components/ProgramUpdate/ProgramUpdate'

export const QUERY = gql`
  query FindProgramUpdateById($id: Int!) {
    programUpdate: programUpdate(id: $id) {
      id
      name
      createdAt
      resolution
      programId
      expirationDate
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>ProgramUpdate not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ programUpdate }) => {
  return <ProgramUpdate programUpdate={programUpdate} />
}
