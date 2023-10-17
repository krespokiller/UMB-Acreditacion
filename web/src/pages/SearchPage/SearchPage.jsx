import SearchProgramOfStudyCell from 'src/components/SearchProgramOfStudyCell'
const SearchPage = ({ letters }) => {
  console.log('letters->\n', letters)
  return (
    <>
      <SearchProgramOfStudyCell letters={letters} />
    </>
  )
}

export default SearchPage
