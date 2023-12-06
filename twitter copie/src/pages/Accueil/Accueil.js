import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Accueil.css'


const Accueil = () => {

  

    const darkMode = useSelector((state) => state.dark);

  


    useEffect(() => {
        if (darkMode) {
          document.body.classList.add('dark-mode');
        } else {
          document.body.classList.remove('dark-mode');
        }
      }, [darkMode]);

     

  return (
    <>


    </>
  )
}

export default Accueil
