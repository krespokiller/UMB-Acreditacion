import { Link } from '@redwoodjs/router'

const AdminHome = () => {
  return (
    <div>
      <h2>{'AdminHome'}</h2>
      <p>
        here is admin home, its suposed to be some data to display right here
      </p>
      <Link to="headQuarters">HeadQuarters</Link>
      <Link to="programOfStudies">ProgramOfStudies</Link>
      <Link to="documents">Documents</Link>
      <Link to="acreditions">Acreditions</Link>
      <Link to="AdminHome">AdminHome</Link>
    </div>
  )
}

export default AdminHome
