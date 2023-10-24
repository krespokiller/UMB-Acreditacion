import { BarChart } from '@tremor/react'

import CheckboxFilter from '../CheckboxFilter/CheckboxFilter'
import CustomLoading from '../CustomLoading/CustomLoading'

export const QUERY = gql`
  query DashboardProgramOfStudies {
    programOfStudies {
      id
      name
      image
      description
      active
      programType
      carrerType
      createdAt
      headQuarter {
        id
        name
      }
      classification
      docenciaServicio
      reaccreditationStatus
      credits
      sniesCode
      coursesNumber
      academicGroup {
        id
        name
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
        }
        expirationDate
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
        }
        expirationDate
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
        }
        expirationDate
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
        }
        expirationDate
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ programOfStudies }) => {
  console.log(programOfStudies)
  const chartdata = [
    {
      name: 'Enfermería',
      'Numero de creditos': 71,
    },
    {
      name: 'Enfermería',
      'Numero de creditos': 21,
    },
    {
      name: 'Enfermería',
      'Numero de creditos': 31,
    },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <div>
        Filtros
        <CheckboxFilter />
      </div>
      <div className="mt-6">
        <CustomLoading />
        <BarChart
          className="my-4 h-96 w-full"
          data={chartdata}
          index="name"
          categories={['Numero de creditos']}
          colors={['blue']}
          yAxisWidth={48}
        />
      </div>
    </div>
  )
}
