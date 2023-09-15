// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import ProgramsOfStudyLayout from 'src/layouts/ProgramsOfStudyLayout'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import AdminHome from './components/AdminHome/AdminHome'
const Routes = () => {
  return (
    <Router>
      <Route path="/" page={LoginPage} name="login" />
      <Set wrap={ProgramsOfStudyLayout}>
        <Route path="/program" page={ProgramPage} name="program" />
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
      </Set>
      {
        //admin route for scaffolds
      }
      <Set wrap={ScaffoldLayout} title="Admin" titleTo="adminHome">
        <Route path="/admin/head-quarters/new" page={HeadQuarterNewHeadQuarterPage} name="newHeadQuarter" />
        <Route path="/admin/head-quarters/{id:Int}/edit" page={HeadQuarterEditHeadQuarterPage} name="editHeadQuarter" />
        <Route path="/admin/head-quarters/{id:Int}" page={HeadQuarterHeadQuarterPage} name="headQuarter" />
        <Route path="/admin/head-quarters" page={HeadQuarterHeadQuartersPage} name="headQuarters" />
        <Route path="/admin/program-of-studies/new" page={ProgramOfStudyNewProgramOfStudyPage} name="newProgramOfStudy" />
        <Route path="/admin/program-of-studies/{id:Int}/edit" page={ProgramOfStudyEditProgramOfStudyPage} name="editProgramOfStudy" />
        <Route path="/admin/program-of-studies/{id:Int}" page={ProgramOfStudyProgramOfStudyPage} name="programOfStudy" />
        <Route path="/admin/program-of-studies" page={ProgramOfStudyProgramOfStudiesPage} name="programOfStudies" />
        <Route path="/admin/documents/new" page={DocumentNewDocumentPage} name="newDocument" />
        <Route path="/admin/documents/{id:Int}/edit" page={DocumentEditDocumentPage} name="editDocument" />
        <Route path="/admin/documents/{id:Int}" page={DocumentDocumentPage} name="document" />
        <Route path="/admin/documents" page={DocumentDocumentsPage} name="documents" />
        <Route path="/admin/acreditions/new" page={AcreditionNewAcreditionPage} name="newAcredition" />
        <Route path="/admin/acreditions/{id:Int}/edit" page={AcreditionEditAcreditionPage} name="editAcredition" />
        <Route path="/admin/acreditions/{id:Int}" page={AcreditionAcreditionPage} name="acredition" />
        <Route path="/admin/acreditions" page={AcreditionAcreditionsPage} name="acreditions" />
        <Route path="/admin/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/admin/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/admin/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/admin/users" page={UserUsersPage} name="users" />
        <Route path="/admin" page={AdminHome} name="adminHome" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
