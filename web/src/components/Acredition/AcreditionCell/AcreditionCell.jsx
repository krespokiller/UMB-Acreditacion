import Acredition from 'src/components/Acredition/Acredition'
import CustomLoading from 'src/components/CustomLoading/CustomLoading'
export const QUERY = gql`
  query FindAcreditionById($id: Int!) {
    acredition: acredition(id: $id) {
      id
      name
      description
      createdAt
      programId
    }
  }
`

export const Loading = () => <CustomLoading />

export const Empty = () => <div>Acredition not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ acredition }) => {
  return <Acredition acredition={acredition} />
}
