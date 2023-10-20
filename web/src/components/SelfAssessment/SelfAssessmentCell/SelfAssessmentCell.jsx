import SelfAssessment from 'src/components/SelfAssessment/SelfAssessment'

export const QUERY = gql`
  query FindSelfAssessmentById($id: Int!) {
    selfAssessment: selfAssessment(id: $id) {
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

export const Empty = () => <div>SelfAssessment not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ selfAssessment }) => {
  return <SelfAssessment selfAssessment={selfAssessment} />
}
