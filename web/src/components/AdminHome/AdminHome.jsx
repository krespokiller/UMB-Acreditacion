import { Card, Title, BarChart, Subtitle } from '@tremor/react'

let chartdata = []

const programsOfStudy = [
  { id: 1, name: 'Programa 1', headQuarterId: 1 },
  { id: 2, name: 'Programa 2', headQuarterId: 2 },
  { id: 3, name: 'Programa 3', headQuarterId: 2 },
  { id: 4, name: 'Programa 4', headQuarterId: 1 },
  { id: 5, name: 'Programa 5', headQuarterId: 3 },
  { id: 6, name: 'Programa 6', headQuarterId: 1 },
  { id: 7, name: 'Programa 7', headQuarterId: 2 },
  { id: 8, name: 'Programa 8', headQuarterId: 3 },
  { id: 9, name: 'Programa 9', headQuarterId: 1 },
  { id: 10, name: 'Programa 10', headQuarterId: 2 },
]
const accreditations = []

// Función para asignar acreditaciones a programas de estudio
function assignAccreditations(programId, numAccreditations) {
  for (let i = 0; i < numAccreditations; i++) {
    const accreditationId = accreditations.length + 1 // Increment the ID of the accreditation
    const accreditationName = `Acreditación ${accreditationId}`
    const accreditationDescription = `Descripción de Acreditación ${accreditationId}`

    // Create an array of documents for this accreditation
    const numDocuments = Math.floor(Math.random() * 3) + 1 // Random number of documents (1 to 3)
    const documents = []
    for (let j = 0; j < numDocuments; j++) {
      const documentId = j + 1
      const documentName = `doc${documentId}`
      documents.push({ name: documentName })
    }

    // Create an array of documentRequired for this accreditation
    const documentRequired = documents.map((doc) => doc.name)

    // Create the accreditation object with documents and documentRequired
    const accreditation = {
      id: accreditationId,
      name: accreditationName,
      description: accreditationDescription,
      programId,
      documents,
      documentsRequired: documentRequired,
    }

    // Push the accreditation to the global accreditations array
    accreditations.push(accreditation)
  }
}

const headQuarters = {}

programsOfStudy.forEach((program) => {
  const numAccreditations = Math.random() < 0.5 ? 2 : 3 // 50% de probabilidad de 2 acreditaciones, 50% de 3 acreditaciones
  assignAccreditations(program.id, numAccreditations)
  const headQuarterId = program.headQuarterId
  if (!headQuarters[headQuarterId]) {
    headQuarters[headQuarterId] = {
      name: `Sede ${headQuarterId}`, // Puedes obtener el nombre de la sede de tus datos reales
      count: 0,
      programs: [],
      accreditations: [],
    }
  }
  headQuarters[headQuarterId].programs = [
    ...headQuarters[headQuarterId].programs,
    program,
  ]
  headQuarters[headQuarterId].accreditations = [
    ...headQuarters[headQuarterId].accreditations,
    ...accreditations.filter((accreditation) => {
      return accreditation.programId === program.id
    }),
  ]
  headQuarters[headQuarterId].count++
})

// Finalmente, puedes convertir el objeto en un arreglo y agregarlo a chartdata:
for (const headQuarterId in headQuarters) {
  chartdata.push(headQuarters[headQuarterId])
}
let reducedData = []

chartdata.forEach((item) => {
  const { name: programName } = item.programs[0] // Assuming each item has a single program
  item.accreditations.forEach((accreditation) => {
    const {
      name: accreditationName,
      documentsRequired,
      documents,
    } = accreditation
    // Create a new object with the desired format
    const accreditationData = {
      programName,
      accreditationName,
      documentsRequired: documentsRequired, // If you want documentsRequired as a comma-separated string
      document: documents, // If you want documents as a comma-separated string
    }
    reducedData.push(accreditationData)
  })
})
console.log(reducedData)

const AdminHome = () => {
  return (
    <>
      {/* Placeholder for the charts */}
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Chart 1: Bar Chart */}
        <div className="dark:bg-gray-light rounded-lg bg-white p-4 shadow-md">
          <h2 className="text-xl font-semibold">Accreditations Progress</h2>
          <Card>
            <Title>Estatus de acreditacion de programas</Title>
            <Subtitle>
              The IUCN Red List has assessed only a small share of the total
              known species in the world.
            </Subtitle>
            <BarChart
              className="mt-6"
              data={chartdata}
              index="name"
              categories={['name']}
              colors={['blue', 'green', 'red']}
              yAxisWidth={48}
            />
          </Card>
        </div>

        {/* Chart 2: Circular Chart */}
        <div className="dark:bg-gray-light rounded-lg bg-white p-4 shadow-md">
          <h2 className="text-xl font-semibold">Accreditation Status</h2>
          {/* Include your circular chart here */}
        </div>
      </div>
    </>
  )
}

export default AdminHome
