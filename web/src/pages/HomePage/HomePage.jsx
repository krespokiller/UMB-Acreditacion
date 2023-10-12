import { Link, routes, navigate } from '@redwoodjs/router'
import { useAuth } from 'src/auth'
import { useEffect } from 'react'

const HomePage = () => {
  const { isAuthenticated, currentUser } = useAuth()
  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.dashboard())
    }else{
      navigate(routes.login())
    }
  }, [isAuthenticated, currentUser])
  return (
    <>
    </>
  )
}

export default HomePage
