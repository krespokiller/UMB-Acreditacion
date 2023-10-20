import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import EstatusSacCell from 'src/components/EstatusSacCell/EstatusSacCell'
const DELETE_PROGRAM_OF_STUDY_MUTATION = gql`
  mutation DeleteProgramOfStudyMutation($id: Int!) {
    deleteProgramOfStudy(id: $id) {
      id
    }
  }
`

const ProgramOfStudy = ({ programOfStudy }) => {
  const { currentUser } = useAuth()
  const [deleteProgramOfStudy] = useMutation(DELETE_PROGRAM_OF_STUDY_MUTATION, {
    onCompleted: () => {
      toast.success('ProgramOfStudy deleted')
      navigate(routes.programOfStudies())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete programOfStudy ' + id + '?')) {
      deleteProgramOfStudy({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment mb-4">
        <header className="rw-segment-header">
          <img
            src={programOfStudy.image}
            alt=""
            className="h-96 w-full rounded object-cover object-center"
          />
        </header>
      </div>
      {currentUser?.roles === 'ADMIN' && (
        <nav className="rw-button-group mb-4">
          <Link
            to={routes.editProgramOfStudy({ id: programOfStudy.id })}
            className="rw-button rw-button-blue"
          >
            Edit
          </Link>
          <button
            type="button"
            className="rw-button rw-button-red"
            onClick={() => onDeleteClick(programOfStudy.id)}
          >
            Delete
          </button>
        </nav>
      )}
      <div className="p-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
          <div className="grid grid-cols-1">
            <h1>
              <span className="rw-text text-lg font-medium text-red-500">
                {programOfStudy.name}
              </span>
            </h1>
            <p className="rw-label font-normal	">
              Estado del programa:{' '}
              <strong className="font-medium">
                {programOfStudy.classification}
              </strong>
            </p>
            <p className="rw-label font-normal	">
              Cupos del programa:{' '}
              <strong className="font-medium">
                {programOfStudy.spaceAvailable}
              </strong>
            </p>{' '}
            <p className="rw-label font-normal	">
              Créditos:{' '}
              <strong className="font-medium">{programOfStudy.credits}</strong>
            </p>{' '}
            <p className="rw-label font-normal	">
              Numero de asignaturas:{' '}
              <strong className="font-medium">
                {programOfStudy.coursesNumber}
              </strong>
            </p>
            <p className="rw-label font-normal	">
              Periodicidad de admisión:{' '}
              <strong className="font-medium">
                {programOfStudy.admissionPeriod}
              </strong>
            </p>
            <p className="rw-label font-normal	">
              Duración del programa:{' '}
              <strong className="font-medium">
                {programOfStudy.duration} semestres
              </strong>
            </p>
            <p className="rw-label font-normal	">
              Facultad:{' '}
              <strong className="font-medium">
                {programOfStudy.academicGroup.faculty.name}
              </strong>
            </p>
            <p className="rw-label font-normal	">
              Unidad académica:{' '}
              <strong className="font-medium">
                {programOfStudy.academicGroup.name}
              </strong>
            </p>
            {programOfStudy.docenciaServicio && (
              <p className="rw-label font-normal" style={{ color: '#13c296' }}>
                Programa con convenio:{' '}
                <strong className="font-medium" style={{ color: '#13c296' }}>
                  docencia - servicio
                </strong>
              </p>
            )}
            <p className="rw-label mb-4 font-normal">
              {programOfStudy.description}
            </p>
            <button type="button" className="rw-button rw-button-red w-48">
              Más información
            </button>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <h1 className="rw-text text-lg font-medium text-red-500">
              Estatus SAC del programa
            </h1>
            <EstatusSacCell id={programOfStudy.id} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProgramOfStudy
