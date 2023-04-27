import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Layout from '../../components/Layout/Layout'

const Blog = () => {
  const [activeFooter, setActiveFooter] = useState(false);
  const HandleFooter = () => {
    setActiveFooter(!activeFooter)
  }
  return (
    <>
      <Layout footer={activeFooter} red>

     {/*  <NavBar/> */}
      
      <div className='blog'>Hello Blog</div>
      <button onClick={()=>HandleFooter()}>active Footer</button>

      </Layout>
    </>
  )
}

export default Blog

