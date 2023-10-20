import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

import Header from 'src/components/Header/Header'
const ScaffoldLayout = ({ titleTo, children }) => {
  return (
    <div className="rw-scaffold  mt-4">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <Header />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes[titleTo]()} className="rw-link">
            Administrador
          </Link>
        </h1>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ScaffoldLayout
