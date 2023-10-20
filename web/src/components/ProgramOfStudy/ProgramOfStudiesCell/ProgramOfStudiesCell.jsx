import { Link, routes } from '@redwoodjs/router'

import CustomLoading from 'src/components/CustomLoading/CustomLoading'
import ProgramOfStudies from 'src/components/ProgramOfStudy/ProgramOfStudies'

export const QUERY = gql`
  query FindProgramOfStudies {
    programOfStudies {
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
      academicGroupId
    }
  }
`

export const Loading = () => <CustomLoading />

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No programOfStudies yet. '}
      <Link to={routes.newProgramOfStudy()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ programOfStudies }) => {
  return <ProgramOfStudies programOfStudies={programOfStudies} />
}
