/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import CustomLoading from '../CustomLoading/CustomLoading'
import DataTable from '../DataTable/DataTable'

export const QUERY = gql`
  query FindProgramOfStudyById($id: Int!) {
    programOfStudy: programOfStudy(id: $id) {
      id
      name
      image
      description
      active
      programType
      carrerType
      createdAt
      headQuarterId
      classification
      docenciaServicio
      reaccreditationStatus
      credits
      sniesCode
      coursesNumber
      admissionPeriod
      duration
      spaceAvailable
      academicGroupId
      academicGroup {
        id
        name
        facultyId
        faculty {
          id
          name
        }
      }
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
const Modal = ({ isOpen, closeModal, data }) => {
  return (
    <div
      className={`${
        isOpen ? 'fixed inset-0 flex items-center justify-center' : 'hidden'
      } bg-black bg-opacity-50 transition-opacity`}
      style={{ zIndex: 2 }}
    >
      <div className="mx-auto max-w-md max-w-xs rounded bg-white p-4 shadow-lg	md:max-w-lg">
        <div className="flex justify-end">
          <button
            className="text-gray-700 hover:text-red-500"
            onClick={closeModal}
          >
            Cerrar
          </button>
        </div>
        {<DataTable key={'Document'} data={data} />}
      </div>
    </div>
  )
}
export const Success = ({ programOfStudy }) => {
  const [selected, setSelected] = React.useState(null)
  const [dataFormat, setDataFormat] = React.useState([
    {
      Acreditaciones: programOfStudy.acredition.length,
      Registro_Calificado: programOfStudy.qualifiedRegistry.length,
      Auto_Evaluaciones: programOfStudy.qualifiedRegistry.length,
      Actualizaciones_Programa: programOfStudy.programUpdate.length,
    },
  ])
  const [documents, setDocuments] = React.useState([
    {
      id: null,
      name: null,
      url: null,
      createdAt: null,
    },
  ])
  const [isModalOpen, setModalOpen] = React.useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)
  const handleClick = (option) => {
    setSelected(option)
  }
  const customDataFormat = (key) => {
    console.log(programOfStudy[key])

    const data = programOfStudy[key].map((item) => {
      return {
        id: item.id,
        Nombre: item.name,
        Fecha_Creacion: item.createdAt,
        Resolucion: item.resolution,
        Documentos: () => {
          isModalOpen ? closeModal() : openModal()
        },
      }
    })
    setDataFormat(data)
  }
  const customDocumentsFormat = (documents) => {
    const data = documents.map((item) => {
      return {
        id: item.id,
        Nombre: item.name,
        Fecha_Creacion: item.createdAt,
        ver: item.url,
      }
    })
    setDocuments([...data])
    //setDocuments([...data, ...data, ...data, ...data, ...data, ...data])
  }
  React.useEffect(() => {
    if (selected !== null) {
      customDocumentsFormat(programOfStudy[selected])
    }
  }, [isModalOpen, programOfStudy, selected])

  React.useEffect(() => {
    if (selected !== null) {
      customDataFormat(selected)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected])

  return (
    <>
      <Modal isOpen={isModalOpen} closeModal={closeModal} data={documents} />
      <div className="rw-segment mt-4 grid grid-cols-1 gap-1">
        <header className="rw-segment-header ">
          <h2 className="rw-heading rw-heading-secondary font-normal	">
            Informacion del programa:{' '}
            <strong className={`font-medium text-red-500`}>
              {programOfStudy.name}
            </strong>
          </h2>
          <div className="mt-4 grid grid-cols-2 lg:grid-cols-4">
            <h2
              className={`align-center font-medium text-red-500 ${
                selected === 'acredition' ? 'underline' : ''
              } hover:cursor-pointer`}
              onClick={() => handleClick('acredition')}
            >
              Acreditacion
            </h2>

            <h2
              className={`align-center font-medium text-red-500 ${
                selected === 'qualifiedRegistry' ? 'underline' : ''
              } hover:cursor-pointer`}
              onClick={() => handleClick('qualifiedRegistry')}
            >
              Registro calificado
            </h2>

            <h2
              className={`align-center font-medium text-red-500 ${
                selected === 'selfAssessment' ? 'underline' : ''
              } hover:cursor-pointer`}
              onClick={() => handleClick('selfAssessment')}
            >
              Auto evaluacion
            </h2>

            <h2
              className={`align-center font-medium text-red-500 ${
                selected === 'programUpdate' ? 'underline' : ''
              } hover:cursor-pointer`}
              onClick={() => handleClick('programUpdate')}
            >
              Modificaciones al programa
            </h2>
          </div>
        </header>
        <div className="rw-segment-main">
          {dataFormat && <DataTable key={'data'} data={dataFormat} />}
        </div>
      </div>
    </>
  )
}
