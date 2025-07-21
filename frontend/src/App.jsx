import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Navbar from './components/shared/navbar';
import Signup from './components/auth/signup';
import Login from './components/auth/login';
import Home from './components/Home';
import Jobs from './components/Jobs';
import LatestJob from './components/LatestJob';
import Footer from './components/Footer';
import './index.css';
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
  {
    path:'/jobs',
    element:<Jobs/>
  }
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
