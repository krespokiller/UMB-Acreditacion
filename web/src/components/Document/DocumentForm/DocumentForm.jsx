import { useRef, useEffect, useState } from 'react'

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
  const rendered = useRef(false)
  const [picker, setPicker] = useState(null)
  //const FILESTACK_API_KEY = process.env.FILESTACK_API_KEY
  const onSubmit = (data) => {
    props.onSave(data, props?.document?.id)
  }

  useEffect(() => {
    if (!rendered.current) {
      rendered.current = true
      const script = document.createElement('script')
      script.src =
        '//static.filestackapi.com/filestack-js/3.x.x/filestack.min.js'
      script.async = true
      document.body.appendChild(script)
      script.onload = () => {
        console.log('loaded')
        const client = window.filestack.init('A3tdHulIRTOXkwqFTi1E8z')
        const picker = client.picker({
          uploadConfig: {
            retry: 2,
            timeout: 10000,
          },
          storeTo: {
            location: 'azure',
            path: '/programName/',
          },
        })
        setPicker(picker)
      }
    }
  }, [])

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
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>

        <TextField
          name="description"
          defaultValue={props.document?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="description" className="rw-field-error" />

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
          onClick={() => {
            if (picker) {
              picker.open()
              picker.on('uploadDone', (res) => {
                console.log(res)
              })
            }
          }}
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
