import { useAuth } from 'src/auth'
import ProgramOfStudiesCell from 'src/components/ProgramOfStudy/ProgramOfStudiesCell'

const DashboardPage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <>
      <div className="flex justify-end">
        {isAuthenticated && (
          <div>
            <span>Logged in as {currentUser.id}</span>{' '}
            <button type="button" onClick={logOut}>
              Logout
            </button>
          </div>
        )}
      </div>
      <ProgramOfStudiesCell />
    </>
  )
}

export default DashboardPage
