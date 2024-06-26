import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import HomePage from './pages/HomePage'
import ProfilesPage from './pages/ProfilesPage'
import NotFoundPage from './pages/NotFoundPage'

import './index.css'

const router = createBrowserRouter([{
  path: '/',
  element: <HomePage />,
  errorElement: <NotFoundPage />,
}, 
{
  path: '/profiles',
  element: <ProfilesPage />, 
}]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
