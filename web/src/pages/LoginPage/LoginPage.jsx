import React from 'react'

//import { Link, routes } from '@redwoodjs/router'

const LoginPage = () => {
  return (
    <div className="dark:bg-gray-dark flex min-h-screen items-center justify-center bg-red-700">
      <div className="dark:bg-gray-light mx-auto flex max-w-screen-lg flex-col rounded-lg bg-white p-8 shadow-md md:flex-row">
        <div className="flex items-center justify-center md:w-1/2">
          <img
            src="https://umb.edu.co/wp-content/uploads/2021/09/Logo-UMB-F-02.png"
            alt="logo"
            className="h-auto w-full"
          />
        </div>
        <div className="mt-4 px-4 md:mt-0 md:w-1/2">
          <h2 className="text-gray-dark mb-4 text-lg font-semibold dark:text-white">
            Login
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="text-gray-dark dark:text-gray-light block"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-light dark:bg-gray-dark border-blue dark:border-gray-light focus:border-blue dark:focus:border-blue w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="text-gray-dark dark:text-gray-light block"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-light dark:bg-gray-dark border-blue dark:border-gray-light focus:border-blue dark:focus:border-blue w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 dark:focus:ring-red-500"
                required
              />
            </div>
            <div className="flex w-full items-center justify-center ">
              <button
                type="submit"
                className="dark:bg-pink text-gray-dark dark:text-gray-light w-full max-w-xs rounded-lg px-4 py-2 hover:bg-red-50 focus:outline-none focus:ring-2 active:outline-none active:ring-red-500 dark:hover:bg-red-50 md:max-w-full"
                onClick={(e) => {
                  e.preventDefault()
                  alert('Login')
                }}
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
