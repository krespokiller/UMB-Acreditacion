import { Link, routes } from '@redwoodjs/router'
const ProgramsOfStudyLayout = ({ children }) => {
  return( 
  <div className="m-16">
    <nav className="mb-1">
      <ul>
        <li>
          <Link to={routes.program()}>routes.program()</Link>
        </li>
        <li>
          <Link to={routes.dashboard()}>routes.dashboard()</Link>
        </li>
      </ul>
    </nav>
    {children}
  </div>
  )
}

export default ProgramsOfStudyLayout
