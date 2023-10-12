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
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await logIn({
      username: data.username,
      password: data.password,
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
    <main className="rw-main">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <div className="rw-scaffold flex flex-col md:flex-row items-center justify-center h-screen">
        
        {/* Logo */}
        <div className="md:w-1/2 md:order-2">
          {/* Insert your logo component here */}
          <img
              src="https://umb.edu.co/wp-content/uploads/2021/09/Logo-UMB-F-02.png"
              alt="logo"
              className="h-auto w-full"
            />
        </div>


        {/* Form Container */}
        <div className="rw-segment w-full md:w-1/2 md:order-1">
          <header className="rw-segment-header">
            <h2 className="rw-heading rw-heading-secondary">Inicio de sesión</h2>
            {/* "Inicio de sesión" is the translation for "Login" in Colombian Spanish */}
          </header>

          <div className="rw-segment-main">
            <div className="rw-form-wrapper">
              <Form onSubmit={onSubmit} className="rw-form-wrapper">
                {/* Username Field */}
                <Label
                  name="username"
                  className="rw-label"
                  errorClassName="rw-label rw-label-error"
                >
                  Usuario
                </Label>
                {/* "Usuario" is the translation for "Username" in Colombian Spanish */}
                <TextField
                  name="username"
                  className="rw-input"
                  errorClassName="rw-input rw-input-error"
                  validation={{
                    required: {
                      value: true,
                      message: 'El nombre de usuario es obligatorio',
                    },
                  }}
                />
                {/* "El nombre de usuario es obligatorio" is the translation for "Username is required" in Colombian Spanish */}
                <FieldError name="username" className="rw-field-error" />

                {/* Password Field */}
                <Label
                  name="password"
                  className="rw-label"
                  errorClassName="rw-label rw-label-error"
                >
                  Contraseña
                </Label>
                {/* "Contraseña" is the translation for "Password" in Colombian Spanish */}
                <PasswordField
                  name="password"
                  className="rw-input"
                  errorClassName="rw-input rw-input-error"
                  autoComplete="current-password"
                  validation={{
                    required: {
                      value: true,
                      message: 'La contraseña es obligatoria',
                    },
                  }}
                />
                {/* "La contraseña es obligatoria" is the translation for "Password is required" in Colombian Spanish */}
                <FieldError name="password" className="rw-field-error" />

                {/* Submit Button */}
                <div className="rw-button-group mt-4">
                  <Submit className="rw-button bg-red-500 text-white">Iniciar sesión</Submit>
                  {/* "Iniciar sesión" is the translation for "Login" in Colombian Spanish */}
                </div>
              </Form>
            </div>
          </div>
        </div>


      </div>
    </main>
    </>
  )
}

export default LoginPage
