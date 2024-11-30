import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import Portfolio from '../Pages/Portfolio/Portfolio';
import Contact from '../Pages/Contact/Contact';

const Router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/portfolio',
          element:<Portfolio></Portfolio>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        }
      ]
    },
  ]);
  

export default Router;