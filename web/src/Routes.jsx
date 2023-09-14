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
const Routes = () => {
  return (
    <Router>
      <Set wrap={ProgramsOfStudyLayout}>
        <Route path="/program" page={ProgramPage} name="program" />
        <Route path="/" page={DashboardPage} name="dashboard" />
      </Set>
      {
        //admin route for scaffolds
      }
      <Set wrap={ScaffoldLayout} title="HeadQuarters" titleTo="headQuarters" buttonLabel="New HeadQuarter" buttonTo="newHeadQuarter">
        <Route path="/admin/head-quarters/new" page={HeadQuarterNewHeadQuarterPage} name="newHeadQuarter" />
        <Route path="/admin/head-quarters/{id:Int}/edit" page={HeadQuarterEditHeadQuarterPage} name="editHeadQuarter" />
        <Route path="/admin/head-quarters/{id:Int}" page={HeadQuarterHeadQuarterPage} name="headQuarter" />
        <Route path="/admin/head-quarters" page={HeadQuarterHeadQuartersPage} name="headQuarters" />
      </Set>
      <Set wrap={ScaffoldLayout} title="ProgramOfStudies" titleTo="programOfStudies" buttonLabel="New ProgramOfStudy" buttonTo="newProgramOfStudy">
        <Route path="/admin/program-of-studies/new" page={ProgramOfStudyNewProgramOfStudyPage} name="newProgramOfStudy" />
        <Route path="/admin/program-of-studies/{id:Int}/edit" page={ProgramOfStudyEditProgramOfStudyPage} name="editProgramOfStudy" />
        <Route path="/admin/program-of-studies/{id:Int}" page={ProgramOfStudyProgramOfStudyPage} name="programOfStudy" />
        <Route path="/admin/program-of-studies" page={ProgramOfStudyProgramOfStudiesPage} name="programOfStudies" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
