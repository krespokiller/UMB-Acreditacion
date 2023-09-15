import Document from 'src/components/Document/Document'

export const QUERY = gql`
  query FindDocumentById($id: Int!) {
    document: document(id: $id) {
      id
      name
      description
      url
      createdAt
      acreditionId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Document not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ document }) => {
  return <Document document={document} />
}
