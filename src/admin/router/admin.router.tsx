import { Navigate, type RouteObject } from 'react-router-dom'
import { Dashboard, DrawsAdminPage } from '..'

export const adminRouter: RouteObject[] = [
  {
    path: 'admin',
    element: <Dashboard/>,
    children: [
      {
        path: 'draws',
        element: <DrawsAdminPage/>
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to='admin' />
  }
]
