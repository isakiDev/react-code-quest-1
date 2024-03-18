import { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Toaster } from 'sonner'

import { router } from './common/router/app.router'
import { useAuth } from './auth'
import { adminRouter } from './admin'
import { AUTH_STATUS } from './const'
import { Spinner } from './common'

export const App = () => {
  const { onCheckAuthToken, onCheckCodeToken, user, status, onLogout } = useAuth()

  useEffect(() => {
    const token = window.localStorage.getItem('TOKEN')

    if (token) {
      onCheckAuthToken(token)
    }
    else {
      const searchParams = new URLSearchParams(window.location.search);
      const codeParam = searchParams.get('code');

      if (codeParam) {
        onCheckCodeToken(codeParam)
      } else {
        onLogout()
      }
    }
  }, [])

  if (status === AUTH_STATUS.CHECKING) return <Spinner />

  const checkRouter = user?.roles.includes('admin')
    ? createBrowserRouter(adminRouter)
    : createBrowserRouter(router)

  return (
    <>
      <Toaster />
      <RouterProvider router={checkRouter} />
    </>
  )
}

export default App
