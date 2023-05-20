import React from 'react'
import Navbar from '../NavbarBoot/NavbarOffCanva'
import Footer from '../../pages/Cv/Footer/Footer'

const Layout = ({children, footer}) => {
  return (
    <>
    <Navbar/>
    {children}
    {footer === true  &&
     <Footer />
    }
   
    </>
  )
}

export default Layout
