// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Private, Router, Route, Set } from '@redwoodjs/router'

import ProgramsOfStudyLayout from 'src/layouts/ProgramsOfStudyLayout'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'
import AdminHome from './components/AdminHome/AdminHome'
//const ROLES_BACKOFFICE = ['ADMIN']

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route exact path="/" redirect="/login" />
      <Route path="/login" page={LoginPage} name="login" />

      <Private unauthenticated="login">
        <Set wrap={ProgramsOfStudyLayout}>
          <Route path="/program" page={ProgramPage} name="program" />
          <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        </Set>
      </Private>

      <Private unauthenticated="login" roles="ADMIN">
        <Set wrap={ScaffoldLayout} title="Admin" titleTo="adminHome">
          <Route path="/admin/users/new" page={UserNewUserPage} name="newUser" />
          <Route path="/admin/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
          <Route path="/admin/users/{id:Int}" page={UserUserPage} name="user" />
          <Route path="/admin/users" page={UserUsersPage} name="users" />

          <Route path="/admin/documents/new" page={DocumentNewDocumentPage} name="newDocument" />
          <Route path="/admin/documents/{id:Int}/edit" page={DocumentEditDocumentPage} name="editDocument" />
          <Route path="/admin/documents/{id:Int}" page={DocumentDocumentPage} name="document" />
          <Route path="/admin/documents" page={DocumentDocumentsPage} name="documents" />

          <Route path="/admin/qualified-registries/new" page={QualifiedRegistryNewQualifiedRegistryPage} name="newQualifiedRegistry" />
          <Route path="/admin/qualified-registries/{id:Int}/edit" page={QualifiedRegistryEditQualifiedRegistryPage} name="editQualifiedRegistry" />
          <Route path="/admin/qualified-registries/{id:Int}" page={QualifiedRegistryQualifiedRegistryPage} name="qualifiedRegistry" />
          <Route path="/admin/qualified-registries" page={QualifiedRegistryQualifiedRegistriesPage} name="qualifiedRegistries" />

          <Route path="/admin/acreditions/new" page={AcreditionNewAcreditionPage} name="newAcredition" />
          <Route path="/admin/acreditions/{id:Int}/edit" page={AcreditionEditAcreditionPage} name="editAcredition" />
          <Route path="/admin/acreditions/{id:Int}" page={AcreditionAcreditionPage} name="acredition" />
          <Route path="/admin/acreditions" page={AcreditionAcreditionsPage} name="acreditions" />

          <Route path="/admin/head-quarters/new" page={HeadQuarterNewHeadQuarterPage} name="newHeadQuarter" />
          <Route path="/admin/head-quarters/{id:Int}/edit" page={HeadQuarterEditHeadQuarterPage} name="editHeadQuarter" />
          <Route path="/admin/head-quarters/{id:Int}" page={HeadQuarterHeadQuarterPage} name="headQuarter" />
          <Route path="/admin/head-quarters" page={HeadQuarterHeadQuartersPage} name="headQuarters" />

          <Route path="/admin/academic-groups/new" page={AcademicGroupNewAcademicGroupPage} name="newAcademicGroup" />
          <Route path="/admin/academic-groups/{id:Int}/edit" page={AcademicGroupEditAcademicGroupPage} name="editAcademicGroup" />
          <Route path="/admin/academic-groups/{id:Int}" page={AcademicGroupAcademicGroupPage} name="academicGroup" />
          <Route path="/admin/academic-groups" page={AcademicGroupAcademicGroupsPage} name="academicGroups" />

          <Route path="/admin/faculties/new" page={FacultyNewFacultyPage} name="newFaculty" />
          <Route path="/admin/faculties/{id:Int}/edit" page={FacultyEditFacultyPage} name="editFaculty" />
          <Route path="/admin/faculties/{id:Int}" page={FacultyFacultyPage} name="faculty" />
          <Route path="/admin/faculties" page={FacultyFacultiesPage} name="faculties" />

          <Route path="/admin/program-of-studies/new" page={ProgramOfStudyNewProgramOfStudyPage} name="newProgramOfStudy" />
          <Route path="/admin/program-of-studies/{id:Int}/edit" page={ProgramOfStudyEditProgramOfStudyPage} name="editProgramOfStudy" />
          <Route path="/admin/program-of-studies/{id:Int}" page={ProgramOfStudyProgramOfStudyPage} name="programOfStudy" />
          <Route path="/admin/program-of-studies" page={ProgramOfStudyProgramOfStudiesPage} name="programOfStudies" />

          <Route path="/admin" page={AdminHome} name="adminHome" />
        </Set>
      </Private>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
