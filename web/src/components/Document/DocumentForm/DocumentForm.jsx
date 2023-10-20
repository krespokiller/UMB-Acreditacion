import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const DocumentForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.document?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>

        <TextField
          name="name"
          defaultValue={props.document?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Url
        </Label>

        <TextField
          name="url"
          defaultValue={props.document?.url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="url" className="rw-field-error" />

        <Label
          name="acreditionId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Acredition id
        </Label>

        <NumberField
          name="acreditionId"
          defaultValue={props.document?.acreditionId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'undefined'}
        />

        <FieldError name="acreditionId" className="rw-field-error" />

        <Label
          name="qualifiedRegistryId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Qualified registry id
        </Label>

        <NumberField
          name="qualifiedRegistryId"
          defaultValue={props.document?.qualifiedRegistryId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'undefined'}
        />

        <FieldError name="qualifiedRegistryId" className="rw-field-error" />

        <Label
          name="selfAssessmentId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Self assessment id
        </Label>

        <NumberField
          name="selfAssessmentId"
          defaultValue={props.document?.selfAssessmentId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'undefined'}
        />

        <FieldError name="selfAssessmentId" className="rw-field-error" />

        <Label
          name="programUpdateId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Program update id
        </Label>

        <NumberField
          name="programUpdateId"
          defaultValue={props.document?.programUpdateId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'undefined'}
        />

        <FieldError name="programUpdateId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default DocumentForm
