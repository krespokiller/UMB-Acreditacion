import { navigate, routes } from '@redwoodjs/router'

import CustomLoading from 'src/components/CustomLoading/CustomLoading'
import ProgramCard from 'src/components/ProgramCard/ProgramCard'

export const QUERY = gql`
  query searchProgramOfStudies($letters: String!) {
    searchProgramOfStudies: searchProgramOfStudies(letters: $letters) {
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
      acredition {
        documents {
          id
        }
      }
      qualifiedRegistry {
        documents {
          id
        }
      }
      academicGroup {
        id
        faculty {
          id
        }
      }
    }
  }
`

export const Loading = () => <CustomLoading />

export const Empty = () => (
  <div className="mx-4">
    <h3>No se encontraron resultados</h3>
    <p>Por favor, intente con otros términos de búsqueda.</p>
  </div>
)

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ searchProgramOfStudies }) => {
  const handleClick = (programOfStudy) => {
    navigate(routes.program({ id: programOfStudy.id }))
  }
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="text-md mb-4 font-semibold lg:text-2xl">
        Resultados de la búsqueda
      </div>
      <div className={`grid grid-cols-1 gap-4 md:grid-cols-2 md:p-4`}>
        {searchProgramOfStudies.map((programOfStudy) => (
          <ProgramCard
            handleClick={handleClick}
            programOfStudy={programOfStudy}
            key={programOfStudy.id}
          />
        ))}
      </div>
      <div className="text-base text-sm lg:text-base">
        <strong>Numero de resultados:</strong> {searchProgramOfStudies.length}
      </div>
    </div>
  )
}
