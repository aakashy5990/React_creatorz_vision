import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import CustomCursor from '../Components/CustomCursor/CustomCursor'
import WhatsApp from "../Components/WhatsApp/WhatsApp";


function App() {
  return (
    <>
        <Navbar></Navbar>
        <CustomCursor></CustomCursor>
        <WhatsApp></WhatsApp>
        <Outlet></Outlet>
    </>
  )
}

export default App;