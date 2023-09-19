import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.dashboard())
    }
  }, [isAuthenticated])

  const correoElectronicoRef = useRef(null)
  useEffect(() => {
    correoElectronicoRef.current?.focus()
  }, [])

  const onSubmit = async (data) => {
    console.log(data)
    const response = await logIn({
      username: data.correoElectronico,
      password: data.contraseA,
    })
    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <div className="dark:bg-gray-dark flex min-h-screen items-center justify-center bg-red-700">
        <div className="dark:bg-gray-light mx-1 flex max-w-screen-lg flex-col rounded-lg bg-white p-8 shadow-md md:flex-row">
          <div className="flex items-center justify-center md:w-1/2">
            <img
              src="https://umb.edu.co/wp-content/uploads/2021/09/Logo-UMB-F-02.png"
              alt="logo"
              className="h-auto w-full"
            />
          </div>
          <div className="mt-4 px-4 md:mt-0 md:w-1/2">
            <Form onSubmit={onSubmit} className="rw-form-wrapper">
              <Label
                name="correoElectronico"
                className="text-gray-dark dark:text-gray-light block"
                errorClassName="text-gray-dark dark:text-gray-light blockrw-label rw-label-error"
              >
                Correo Electronico
              </Label>
              <TextField
                name="correoElectronico"
                className="rw-input"
                errorClassName="bg-gray-light dark:bg-gray-dark border-blue dark:border-gray-light focus:border-blue dark:focus:border-blue w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-500rw-input rw-input-error"
                ref={correoElectronicoRef}
                validation={{
                  required: {
                    value: true,
                    message: 'Correo Electronico is required',
                  },
                }}
              />

              <FieldError name="correoElectronico" className="rw-field-error" />

              <Label
                name="contraseA"
                className="rw-label"
                errorClassName="text-gray-dark dark:text-gray-light blockrw-label rw-label-error"
              >
                Contraseña
              </Label>
              <PasswordField
                name="contraseA"
                className="bg-gray-light dark:bg-gray-dark border-blue dark:border-gray-light focus:border-blue dark:focus:border-blue rw-input w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-500"
                errorClassName="rw-input rw-input-error"
                autoComplete="current-password"
                validation={{
                  required: {
                    value: true,
                    message: 'Contraseña is required',
                  },
                }}
              />

              <FieldError name="contraseA" className="rw-field-error" />

              <div className="rw-button-group">
                <Submit className="dark:bg-pink text-gray-dark dark:text-gray-light rw-button rw-button-red w-full max-w-xs rounded-lg px-4 py-2 hover:bg-red-50 focus:outline-none focus:ring-2 active:outline-none active:ring-red-500 dark:hover:bg-red-50 md:max-w-full">
                  Inicia Sesion
                </Submit>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage
