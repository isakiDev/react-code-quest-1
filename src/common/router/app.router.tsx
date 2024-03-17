import { Navigate, type RouteObject } from 'react-router-dom'

import { authRouter } from '../../auth'
import { HomePage, Layout } from '..'

export const router: RouteObject[] = [
  {
    path: 'auth/*',
    children: authRouter
  },
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to='/'/>
  }
]
