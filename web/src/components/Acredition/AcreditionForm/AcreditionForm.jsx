import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const AcreditionForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.acredition?.id)
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
          defaultValue={props.acredition?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="resolution"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Resolution
        </Label>

        <TextField
          name="resolution"
          defaultValue={props.acredition?.resolution}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="resolution" className="rw-field-error" />

        <Label
          name="programId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Program id
        </Label>

        <NumberField
          name="programId"
          defaultValue={props.acredition?.programId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'undefined'}
        />

        <FieldError name="programId" className="rw-field-error" />

        <Label
          name="expirationDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Expiration date
        </Label>

        <DatetimeLocalField
          name="expirationDate"
          defaultValue={formatDatetime(props.acredition?.expirationDate)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="expirationDate" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default AcreditionForm
