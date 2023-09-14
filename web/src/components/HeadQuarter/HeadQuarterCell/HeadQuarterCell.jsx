import HeadQuarter from 'src/components/HeadQuarter/HeadQuarter'

export const QUERY = gql`
  query FindHeadQuarterById($id: Int!) {
    headQuarter: headQuarter(id: $id) {
      id
      name
      description
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>HeadQuarter not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ headQuarter }) => {
  return <HeadQuarter headQuarter={headQuarter} />
}
