import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import HeadQuarterForm from 'src/components/HeadQuarter/HeadQuarterForm'

export const QUERY = gql`
  query EditHeadQuarterById($id: Int!) {
    headQuarter: headQuarter(id: $id) {
      id
      name
      body
      image
      description
      active
      createdAt
      programOfStudyId
    }
  }
`
const UPDATE_HEAD_QUARTER_MUTATION = gql`
  mutation UpdateHeadQuarterMutation(
    $id: Int!
    $input: UpdateHeadQuarterInput!
  ) {
    updateHeadQuarter(id: $id, input: $input) {
      id
      name
      body
      image
      description
      active
      createdAt
      programOfStudyId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ headQuarter }) => {
  const [updateHeadQuarter, { loading, error }] = useMutation(
    UPDATE_HEAD_QUARTER_MUTATION,
    {
      onCompleted: () => {
        toast.success('HeadQuarter updated')
        navigate(routes.headQuarters())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateHeadQuarter({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit HeadQuarter {headQuarter?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <HeadQuarterForm
          headQuarter={headQuarter}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
