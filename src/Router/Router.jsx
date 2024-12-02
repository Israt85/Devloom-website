import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home/Home';
import Portfolio from '../Pages/Portfolio/Portfolio';
import Contact from '../Pages/Contact/Contact';
import Blogs from '../Pages/Blogs/Blogs';

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
        },
        {
          path:'/blog',
          element:<Blogs></Blogs>
        }
      ]
    },
  ]);
  

export default Router;