import React,{ useEffect } from 'react'
import Header from "./Header/Header"
import NavbarOffCanva from '../../components/NavbarBoot/NavbarOffCanva' 
import Footer from './Footer/Footer'
import SectionPresentation from './SectionPresentation/SectionPresentation'
import Main from './Main/Main'
import { useSelector } from 'react-redux'
import intro from '../../assets/intro.png'

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
    <>

   <div className='background-image bckgd'>
     <img src={intro} alt="Accueil" className="img-fluid   " />
     </div>
  
        
        <NavbarOffCanva />

      
   
      <Main
         HandleName={HandleName}
       />
     {/*   <SectionPresentation  /> */}
     
 
      <Footer name={name}  />
    
    </>
  )
}

export default Cv

