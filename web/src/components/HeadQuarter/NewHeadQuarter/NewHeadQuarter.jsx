import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import HeadQuarterForm from 'src/components/HeadQuarter/HeadQuarterForm'

const CREATE_HEAD_QUARTER_MUTATION = gql`
  mutation CreateHeadQuarterMutation($input: CreateHeadQuarterInput!) {
    createHeadQuarter(input: $input) {
      id
    }
  }
`

const NewHeadQuarter = () => {
  const [createHeadQuarter, { loading, error }] = useMutation(
    CREATE_HEAD_QUARTER_MUTATION,
    {
      onCompleted: () => {
        toast.success('HeadQuarter created')
        navigate(routes.headQuarters())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createHeadQuarter({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New HeadQuarter</h2>
      </header>
      <div className="rw-segment-main">
        <HeadQuarterForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewHeadQuarter
