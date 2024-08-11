import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <section className='align-elements py-20'>
    <Outlet/>
    </section>
    
    </>
  )
}

export default Home