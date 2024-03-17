// import { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// import { Toaster } from 'sonner'

import { router } from './common/router/app.router'
// import { postsRouter } from './posts'
// import { AUTH_STATUS } from './consts'
// import { useAuth } from './auth'
// import { Spinner } from './ui/components'
// import { authRouter } from './auth'

export const App = () => {
  // const { userStatus, onCheckAuthToken } = useAuth()

  // useEffect(() => {
  //   onCheckAuthToken()
  // }, [])

  // if (userStatus === AUTH_STATUS.CHECKING) {
  //   return <Spinner />
  // }

  // const checkRouter = userStatus === AUTH_STATUS.AUTHENTICATED
  //   ? createBrowserRouter(postsRouter)
  //   : createBrowserRouter(router)

  const routerNav = createBrowserRouter(router)

  return (
    <>
      {/* <Toaster /> */}
      {/* <RouterProvider router={checkRouter} /> */}
      <RouterProvider router={routerNav} />
    </>
  )
}

export default App
