import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ProgramPage = () => {
  return (
    <>
      <MetaTags title="Program" description="Program page" />

      <h1>ProgramPage</h1>
      <p>
        Find me in <code>./web/src/pages/ProgramPage/ProgramPage.jsx</code>
      </p>
      <p>
        My default route is named <code>program</code>, link to me with `
        <Link to={routes.program()}>Program</Link>`
      </p>
    </>
  )
}

export default ProgramPage
