import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Navbar from './components/shared/navbar';
import Signup from './components/auth/signup';
import Login from './components/auth/login';
import Home from './components/Home';

import './App.css';

const appRouter = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path:'/',
    element:<Home/>
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/home',
    element: <Home />,
  },
]);

function App() {
  return (
    <>
      <div>
      <RouterProvider router={appRouter} />
      </div>
      
    </>
  );
}

export default App;
