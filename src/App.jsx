// import { Component } from 'react';
import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'// import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Parent1 from './components/Parent1/Parent1';
import Contacts from './components/Contacts/Contacts';
import Product from './components/Product/Product';
import Notfound from './components/Notfound/Notfound';
import Web from './components/Web/Web';
import Mobile from './components/Mobile/Mobile';
import Gallery from './components/Gallery/Gallery';

export default function App() {

  let routers = createBrowserRouter(
    [
      {
        path: '', element: <Layout />, children: [
          { index: true, element: <Home /> },
          { path: 'gallery', element: <Gallery />, children: [
            {index: true, element: <Web/>},
            {path: 'mobile', element: <Mobile/>},
          ] },
          { path: 'about', element: <About /> },
          { path: 'contact', element: <Contacts /> },
          { path: 'parent', element: <Parent1 /> },
          { path: 'product', element: <Product /> },
          { path: '*', element: <Notfound /> },
        ]
      }
    ]
  )
  return <>
    <RouterProvider router={routers}></RouterProvider>
  </>
}
