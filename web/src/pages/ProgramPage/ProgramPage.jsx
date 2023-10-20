import { useQuery } from '@redwoodjs/web'

import ProgramOfStudy from 'src/components/ProgramOfStudy/ProgramOfStudy/ProgramOfStudy'
import { QUERY } from 'src/components/ProgramOfStudy/ProgramOfStudyCell'

const ProgramPage = ({ id }) => {
  const { data } = useQuery(QUERY, {
    variables: { id: parseInt(id) },
  })
  return <>{data && <ProgramOfStudy programOfStudy={data?.programOfStudy} />}</>
}

export default ProgramPage
