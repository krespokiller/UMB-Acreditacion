import { Link, routes } from '@redwoodjs/router'
import { TabGroup, TabPanel, TabPanels } from "@tremor/react";
export const QUERY = gql`
  query FindProgramOfStudyQuery($id: Int!) {
    programOfStudy: programOfStudy(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ programOfStudy }) => {
  return (<>
    <TabGroup className="mt-6">
    <TabPanels>
      <TabPanel>
        <Grid numItemsSm={1} numItemsLg={5} className="gap-6 mt-6">
        {programOfStudy.map((item) => {
        return (<Card>
          <article class="prose">
            <h1>{item.name}</h1>
            <p>
              {item.description}
            </p>
            <p>
              <Link to={routes.programOfStudy({ id: item.id })}>View</Link>
            </p>
          </article>
          <div className="h-28" />
        </Card>)
      })}

        </Grid>
        <div className="mt-6">
          <Card>
            <div className="h-80" />
          </Card>
        </div>
      </TabPanel>
    </TabPanels>
  </TabGroup>
    </>)
}