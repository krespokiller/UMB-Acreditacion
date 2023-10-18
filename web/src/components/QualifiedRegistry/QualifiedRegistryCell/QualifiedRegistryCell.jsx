import CustomLoading from 'src/components/CustomLoading/CustomLoading'
import QualifiedRegistry from 'src/components/QualifiedRegistry/QualifiedRegistry'
export const QUERY = gql`
  query FindQualifiedRegistryById($id: Int!) {
    qualifiedRegistry: qualifiedRegistry(id: $id) {
      id
      name
      description
      createdAt
      programId
    }
  }
`

export const Loading = () => <CustomLoading />

export const Empty = () => <div>QualifiedRegistry not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ qualifiedRegistry }) => {
  return <QualifiedRegistry qualifiedRegistry={qualifiedRegistry} />
}
