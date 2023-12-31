/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
const Header = () => {
  const { currentUser, logOut } = useAuth()
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 650)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [search, setSearch] = React.useState('')
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 650)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  if (isMobile) {
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }
    return (
      <header className="flex items-center justify-between bg-white">
        {/* Logo a la izquierda */}
        <img
          src="https://umb.edu.co/wp-content/uploads/2021/09/Logo-UMB-F-02.png"
          alt="logo"
          className="h-auto"
          style={{
            width: '200px',
          }}
          onClick={() => {
            navigate(routes.dashboard())
          }}
        />

        {/* Mobile menu icon */}

        <button
          onClick={toggleMenu}
          className="mr-4 text-gray-800 focus:outline-none md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 stroke-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {isMenuOpen && (
          <div
            className="fixed right-0 flex h-screen flex-col items-end bg-white px-4 pt-8 md:hidden"
            style={{ top: '0', zIndex: '1' }}
          >
            <div className="flex-end relative mb-4 mt-4 flex w-full">
              {/* Botón de menu */}
              <button
                onClick={toggleMenu}
                className="mr-4 text-gray-800 focus:outline-none md:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 stroke-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
            {/* Barra de búsqueda */}
            <div className="relative mb-4 mt-4 flex w-full">
              <input
                type="text"
                placeholder="Buscar..."
                className="rounded-md border border-gray-300 bg-white p-2 hover:border-red-500 focus:outline-none"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                onKeyDown={(event) => {
                  //if is enter search
                  if (event.keyCode === 13 && search) {
                    navigate(routes.search({ letters: search }))
                  }
                }}
              />
              <button
                className="absolute right-0 rounded-md p-2"
                onClick={() => {
                  if (search) {
                    navigate(routes.search({ letters: search }))
                  }
                }}
              >
                {/* Icono de búsqueda personalizado */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  className="h-6 w-6 stroke-red-500 text-gray-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </div>

            {/* notification/logout box */}

            <div className="mb-4 flex w-full items-center justify-around">
              <p className="text-center text-gray-400	">
                {currentUser?.email || 'usuario@dominio.com'}
              </p>

              <button className="rounded-full p-2" onClick={logOut}>
                {/* Icono de cerrar sesión e email */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  className="h-6 w-6 stroke-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </header>
    )
  }

  return (
    <header className="flex items-center justify-between bg-white p-4">
      {/* Logo a la izquierda */}
      <div className="flex items-center">
        <img
          src="https://umb.edu.co/wp-content/uploads/2021/09/Logo-UMB-F-02.png"
          alt="logo"
          className="mb-8 h-auto md:mb-0 "
          style={{
            width: '250px',
          }}
          onClick={() => {
            navigate(routes.dashboard())
          }}
        />
      </div>

      {/* Barra de búsqueda en el centro */}

      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full rounded-md border border-gray-300 bg-white p-2 hover:border-red-500 focus:outline-none md:w-96"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          onKeyDown={(event) => {
            //if is enter search
            if (event.keyCode === 13 && search) {
              navigate(routes.search({ letters: search }))
            }
          }}
        />
        <button
          className="absolute right-0 rounded-md bg-white p-2"
          style={{ marginRight: '1px' }}
          onClick={() => {
            if (search) {
              navigate(routes.search({ letters: search }))
            }
          }}
        >
          {/* Icono de búsqueda personalizado */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="h-6 w-6 stroke-red-500 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>

      {/* Sección a la derecha con email, notificaciones y cerrar sesión */}
      <div className="flex items-center">
        <p className="text-center text-gray-400	">
          {currentUser?.email || 'usuario@dominio.com'}
        </p>

        <button className="rounded-full p-2" onClick={logOut}>
          {/* Icono de cerrar sesión */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="h-6 w-6 stroke-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
            />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header
