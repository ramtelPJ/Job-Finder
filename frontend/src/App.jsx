import { useState } from 'react'

import Navbar from './components/shared/navbar'
import './App.css'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import Signup from './components/auth/signup'
import Login from './components/auth/login'
import Home from './components/Home'


const appRouter=createBrowserRouter([
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '/Home',
    element: <Home/>
  }
])
function App() {
  

  return (
    <>
     
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
