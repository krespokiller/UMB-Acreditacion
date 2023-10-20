import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  RadioField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const ProgramOfStudyForm = (props) => {
  const onSubmit = (data) => {
    if (data.classification === '') {
      data.classification = null
    }

    props.onSave(data, props?.programOfStudy?.id)
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
          defaultValue={props.programOfStudy?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="name" className="rw-field-error" />

        <Label
          name="image"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image
        </Label>

        <TextField
          name="image"
          defaultValue={props.programOfStudy?.image}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="image" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.programOfStudy?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />

        <Label
          name="active"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Active
        </Label>

        <CheckboxField
          name="active"
          defaultChecked={props.programOfStudy?.active}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="active" className="rw-field-error" />

        <Label
          name="programType"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Program type
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="programOfStudy-programType-0"
            name="programType"
            defaultValue="PREGRADO"
            defaultChecked={props.programOfStudy?.programType?.includes(
              'PREGRADO'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Pregrado</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="programOfStudy-programType-1"
            name="programType"
            defaultValue="POSGRADO"
            defaultChecked={props.programOfStudy?.programType?.includes(
              'POSGRADO'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Posgrado</div>
        </div>

        <FieldError name="programType" className="rw-field-error" />

        <Label
          name="carrerType"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Carrer type
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="programOfStudy-carrerType-0"
            name="carrerType"
            defaultValue="TECNICO"
            defaultChecked={props.programOfStudy?.carrerType?.includes(
              'TECNICO'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Tecnico</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="programOfStudy-carrerType-1"
            name="carrerType"
            defaultValue="TECNOLOGO"
            defaultChecked={props.programOfStudy?.carrerType?.includes(
              'TECNOLOGO'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Tecnologo</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="programOfStudy-carrerType-2"
            name="carrerType"
            defaultValue="PROFESIONAL"
            defaultChecked={props.programOfStudy?.carrerType?.includes(
              'PROFESIONAL'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Profesional</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="programOfStudy-carrerType-3"
            name="carrerType"
            defaultValue="ESPECIALIZACION_TECNICA"
            defaultChecked={props.programOfStudy?.carrerType?.includes(
              'ESPECIALIZACION_TECNICA'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Especializacion Tecnica</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="programOfStudy-carrerType-4"
            name="carrerType"
            defaultValue="ESPECIALIZACION_TECNOLOGICA"
            defaultChecked={props.programOfStudy?.carrerType?.includes(
              'ESPECIALIZACION_TECNOLOGICA'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Especializacion Tecnologica</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="programOfStudy-carrerType-5"
            name="carrerType"
            defaultValue="ESPECIALIZACION_UNIVERSITARIA"
            defaultChecked={props.programOfStudy?.carrerType?.includes(
              'ESPECIALIZACION_UNIVERSITARIA'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Especializacion Universitaria</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="programOfStudy-carrerType-6"
            name="carrerType"
            defaultValue="MAESTRIA"
            defaultChecked={props.programOfStudy?.carrerType?.includes(
              'MAESTRIA'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Maestria</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="programOfStudy-carrerType-7"
            name="carrerType"
            defaultValue="DOCTORADO"
            defaultChecked={props.programOfStudy?.carrerType?.includes(
              'DOCTORADO'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Doctorado</div>
        </div>

        <FieldError name="carrerType" className="rw-field-error" />

        <Label
          name="headQuarterId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Head quarter id
        </Label>

        <NumberField
          name="headQuarterId"
          defaultValue={props.programOfStudy?.headQuarterId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'undefined'}
        />

        <FieldError name="headQuarterId" className="rw-field-error" />

        <Label
          name="classification"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Classification
        </Label>

        <div className="rw-check-radio-items">
          <RadioField
            id="programOfStudy-classification-none"
            name="classification"
            defaultValue=""
            defaultChecked={!props.spot?.spotType}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div className="rw-check-radio-item-none">None</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="programOfStudy-classification-0"
            name="classification"
            defaultValue="ACREDITADO"
            defaultChecked={props.programOfStudy?.classification?.includes(
              'ACREDITADO'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Acreditado</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="programOfStudy-classification-1"
            name="classification"
            defaultValue="ENESPERA"
            defaultChecked={props.programOfStudy?.classification?.includes(
              'ENESPERA'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Enespera</div>
        </div>

        <div className="rw-check-radio-items">
          <RadioField
            id="programOfStudy-classification-2"
            name="classification"
            defaultValue="PROYECTADO"
            defaultChecked={props.programOfStudy?.classification?.includes(
              'PROYECTADO'
            )}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />

          <div>Proyectado</div>
        </div>

        <FieldError name="classification" className="rw-field-error" />

        <Label
          name="docenciaServicio"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Docencia servicio
        </Label>

        <CheckboxField
          name="docenciaServicio"
          defaultChecked={props.programOfStudy?.docenciaServicio}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="docenciaServicio" className="rw-field-error" />

        <Label
          name="reaccreditationStatus"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Reaccreditation status
        </Label>

        <TextField
          name="reaccreditationStatus"
          defaultValue={props.programOfStudy?.reaccreditationStatus}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="reaccreditationStatus" className="rw-field-error" />

        <Label
          name="credits"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Credits
        </Label>

        <NumberField
          name="credits"
          defaultValue={props.programOfStudy?.credits}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="credits" className="rw-field-error" />

        <Label
          name="sniesCode"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Snies code
        </Label>

        <TextField
          name="sniesCode"
          defaultValue={props.programOfStudy?.sniesCode}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="sniesCode" className="rw-field-error" />

        <Label
          name="coursesNumber"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Courses number
        </Label>

        <NumberField
          name="coursesNumber"
          defaultValue={props.programOfStudy?.coursesNumber}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="coursesNumber" className="rw-field-error" />

        <Label
          name="academicGroupId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Academic group id
        </Label>

        <NumberField
          name="academicGroupId"
          defaultValue={props.programOfStudy?.academicGroupId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          emptyAs={'undefined'}
        />

        <FieldError name="academicGroupId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ProgramOfStudyForm
