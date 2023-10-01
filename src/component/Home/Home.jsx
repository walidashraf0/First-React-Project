import React, { useContext } from 'react'
import Style from './Home.module.css'
import Products from '../Products/Products'
import Cart from '../Cart/Cart'
import Categories from '../Categories/Categories'
import { CounterContext } from '../../Context/CounterContext'

export default function Home() {

 let {changeCount} = useContext(CounterContext)
  return (
    <>
    <h2>Home</h2>
    <button onClick={()=>changeCount()} className='btn btn-info'>Change</button>
    </>
  )
}
