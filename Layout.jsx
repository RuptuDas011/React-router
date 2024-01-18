import React from 'react'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from './components/header/Header'
function layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default layout
