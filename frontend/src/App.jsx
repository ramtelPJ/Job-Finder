import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Navbar from './components/shared/navbar';
import Signup from './components/auth/signup';
import Login from './components/auth/Login.jsx';
import Home from './components/Home';
import Jobs from './components/Jobs';
import LatestJob from './components/LatestJob';
import Footer from './components/Footer';
import Browse from './components/Browse';
import './index.css';
import './App.css';
import Profile from './components/Profile.jsx';
import JobDescription from './components/JobDescription.jsx';
import Companies from './components/admin/Companies.jsx';
import CompanyCreate from './components/admin/CompanyCreate.jsx';
import CompanySetup from './components/admin/CompanySetup.jsx';
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
  },
  {
path:'/description/:id',
element:<JobDescription/>
  },
  {
    path:'/browse',
    element:<Browse/>
  },
  {

  
  path:'profile',
  element:<Profile/>
  },
// Admin logic  start from here:
{
  path:'admin/companies',
  element:<Companies/>
},
{
  path:'admin/companies/create',
  element:<CompanyCreate/>
},
{
  path:'/admin/companies/:id',
  element:<CompanySetup/>
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
