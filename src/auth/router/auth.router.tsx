import { Navigate, type RouteObject } from 'react-router-dom'

export const authRouter: RouteObject[] = [
  {
    path: 'login',
    element: <h1>AuthRo</h1>
  },
  {
    path: '*',
    element: <Navigate to='/auth/login'/>
  }
]
