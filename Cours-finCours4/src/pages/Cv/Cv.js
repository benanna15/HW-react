import React,{ useEffect } from 'react'
import Header from "./Header/Header"
import Navbar from '../../components/NavBar/Navbar'
import Footer from './Footer/Footer'
import SectionPresentation from './SectionPresentation/SectionPresentation'
import Main from './Main/Main'
import { useSelector } from 'react-redux'
const Cv = () => {
  const darkMode = useSelector((state) => state.dark);



  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);
    
    const [name, setName] = React.useState("Anna Beniard");

    const HandleName = (cb) => {
       setName(cb)
    }

  return (
    <div className=''>
      <header className={`${darkMode ? 'bg-dark text-white' : ''}`}>
        <Header name={name} />
        <Navbar />
      </header>

      <SectionPresentation  />
      <Main
         HandleName={HandleName}
       />
 
      <Footer name={name}  />
    
    </div>
  )
}

export default Cv

