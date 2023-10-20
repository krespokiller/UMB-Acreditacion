import CustomLoading from 'src/components/CustomLoading/CustomLoading'
import ProgramOfStudy from 'src/components/ProgramOfStudy/ProgramOfStudy'

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
    }
  }
`

export const Loading = () => <CustomLoading />

export const Empty = () => <div>ProgramOfStudy not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ programOfStudy }) => {
  return <ProgramOfStudy programOfStudy={programOfStudy} />
}
