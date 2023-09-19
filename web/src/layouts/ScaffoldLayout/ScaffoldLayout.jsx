import { Link, routes } from '@redwoodjs/router'
import { Toaster, toast } from '@redwoodjs/web/toast'

const ScaffoldLayout = ({ title, titleTo, children }) => {
  return (
    <div className="rw-scaffold">
      <Toaster
        toastOptions={{
          className: 'rw-toast',
          duration: 300,

          children: ({ message, timeout }) => (
            <>
              {message}
              {timeout}
            </>
          ),
        }}
      />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes[titleTo]()}
            onClick={() => {
              toast.success('AdminHome')
            }}
          >
            AdminHome
          </Link>
        </h1>

        <Link to={routes['headQuarters']()}>Sedes</Link>
        <Link to={routes['programOfStudies']()}>Programas</Link>
        <Link to={routes['documents']()}>Documentos</Link>
        <Link to={routes['acreditions']()}>Acreditaciones</Link>
        <Link to={routes['users']()}>Usuarios</Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ScaffoldLayout
