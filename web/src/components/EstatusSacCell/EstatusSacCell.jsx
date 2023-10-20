import CustomLoading from '../CustomLoading/CustomLoading'
import DataTable from '../DataTable/DataTable'

export const QUERY = gql`
  query estatusSAC($id: Int!) {
    estatusSAC: estatusSAC(id: $id) {
      acredition {
        id
        name
        createdAt
        resolution
        documents {
          id
          name
          url
          createdAt
        }
      }
      qualifiedRegistry {
        id
        name
        createdAt
        resolution
        documents {
          id
          name
          url
          createdAt
        }
      }
      selfAssessment {
        id
        name
        createdAt
        resolution
        documents {
          id
          name
          url
          createdAt
        }
      }
      programUpdate {
        id
        name
        createdAt
        resolution
        documents {
          id
          name
          url
          createdAt
        }
      }
    }
  }
`

export const Loading = () => <CustomLoading />

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ estatusSAC }) => {
  const { acredition, qualifiedRegistry, selfAssessment, programUpdate } =
    estatusSAC

  const createTableStructure = (name, array) => {
    /*

    [
    {
        "__typename": "Acredition",
        "id": 1,
        "name": "Acredition 1",
        "createdAt": "2023-10-20T05:12:40.038Z",
        "resolution": "123123",
        "documents": [
            {
                "__typename": "Document",
                "id": 1,
                "name": "Document Acredition 1",
                "url": "document1.pdf",
                "createdAt": "2023-10-20T05:12:40.052Z"
            }
        ]
    }
]

    */

    if (!array || array.length === 0) {
      return null
    }

    const recent = array.reduce((mostRecent, current) => {
      const currentCreatedAt = new Date(current.createdAt)
      const mostRecentCreatedAt = new Date(mostRecent.createdAt)

      return currentCreatedAt > mostRecentCreatedAt ? current : mostRecent
    })
    return {
      nombre: name,
      Fecha: recent.createdAt,
      Resolucion: recent.resolution,
      ver: recent.documents[0].url,
    }
  }

  const structureForTable = [
    createTableStructure('Acreditación', acredition),
    createTableStructure('Qualified Registry', qualifiedRegistry),
    createTableStructure('Self Assessment', selfAssessment),
    createTableStructure('Program Update', programUpdate),
  ]
  return <DataTable data={structureForTable} />
}
