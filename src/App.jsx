/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Layout from './component/Layout/Layout'
import Home from './component/Home/Home'
import Cart from './component/Cart/Cart'
import Brands from './component/Brands/Brands'
import Categories from './component/Categories/Categories'
import Products from './component/Products/Products'
import Login from './component/Login/Login'
import Register from './component/Register/Register'
import Notfound from './component/Notfound/Notfound'
import { CounterContextProvider } from './Context/CounterContext'
import UserTokenProvider from './Context/UserToken'
import ProtectedRoute from './component/ProtectedRoute/ProtectedRoute'


export default function App() {

  let routers = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <ProtectedRoute><Home /></ProtectedRoute> },
        { path: 'cart', element: <ProtectedRoute><Cart /></ProtectedRoute> },
        { path: 'Brands', element: <ProtectedRoute><Brands /></ProtectedRoute> },
        { path: 'categories', element: <ProtectedRoute><Categories /></ProtectedRoute> },
        { path: 'Products', element: <ProtectedRoute><Products /></ProtectedRoute> },
        { path: 'Login', element: <Login /> },
        { path: 'Register', element: <Register /> },
        { path: 'Notfound', element: <Notfound /> },
      ]
    }
  ])
  return <>
    <UserTokenProvider>
      <CounterContextProvider>
        <RouterProvider router={routers}></RouterProvider>
      </CounterContextProvider>
    </UserTokenProvider>
  </>
}