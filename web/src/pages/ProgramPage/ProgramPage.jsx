import { useQuery } from '@redwoodjs/web'

import { QUERY } from 'src/components/ProgramOfStudy/ProgramOfStudyCell'

const ProgramPage = ({ id }) => {
  const { data } = useQuery(QUERY, {
    variables: { id },
  })
  React.useEffect(() => {
    console.log('programOfStudy', data)
  }, [data])
  return (
    <>
      <h1>ProgramPage</h1>
      <p>
        Find me in <code>./web/src/pages/ProgramPage/ProgramPage.jsx</code>
      </p>
      <p>
        My default route is named <code>program</code>, link to me with `
      </p>
    </>
  )
}

export default ProgramPage
