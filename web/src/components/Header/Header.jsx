import { useAuth } from 'src/auth'
const Header = () => {
  const { currentUser, logOut } = useAuth()
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 650)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

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
          <div className="fixed right-0 top-20 flex h-screen flex-col items-end bg-white px-4 md:hidden">
            {/* Barra de búsqueda */}
            <div className="relative mb-4 flex w-full">
              <input
                type="text"
                placeholder="Buscar..."
                className="rounded-md border border-gray-300 bg-white p-2 focus:border-red-500 focus:outline-none"
              />
              <button
                className="absolute right-0 rounded-md p-2"
                onClick={() => {
                  alert('Buscar')
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

            <div className="mb-4 flex w-full justify-around">
              <button
                className="rounded-full p-2"
                onClick={() => {
                  alert('Notificaciones')
                }}
              >
                {/* Icono de notificaciones */}
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
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
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
            {/* email */}
            <div className="w-full">
              <p className="text-center text-gray-400	">usuario@dominio.com</p>
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
        />
      </div>

      {/* Barra de búsqueda en el centro */}

      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Buscar..."
          className="active:border-red w-full rounded-md border p-2 md:w-96"
        />
        <button
          className="absolute right-0 rounded-md bg-white p-2"
          style={{ marginRight: '1px' }}
          onClick={() => {
            alert('buscar')
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

        <button
          className="mr-4 rounded-full p-2"
          onClick={() => {
            alert('Notificaciones')
          }}
        >
          {/* Icono de notificaciones */}
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
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg>
        </button>
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
