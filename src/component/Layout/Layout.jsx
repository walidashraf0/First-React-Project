import React, { useContext, useEffect } from 'react'
import style from './Layout.module.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { UserToken } from '../../Context/UserToken'

export default function Layout() {

  let {setUserToken} = useContext(UserToken)
  if(localStorage.getItem('userToken')) {
    setUserToken(localStorage.getItem('userToken'))
  }

  useEffect(()=>{
    if(localStorage.getItem('userToken')) {
      setUserToken(localStorage.getItem('userToken'))
    }
  }, [])

  return <>
    <Navbar/>
    <Outlet></Outlet>
    <Footer/>
    </>
}
