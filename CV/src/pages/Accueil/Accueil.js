import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import './Accueil.css'
import i18n from '../../i18n/config';
import NavbarOffCanva from '../../components/NavbarBoot/NavbarOffCanva';

import { Link } from 'react-router-dom';
import Footer from '../Cv/Footer/Footer';
import intro from '../../assets/intro.png'
import nav from '../../assets/nav.png'

const Accueil = () => {

    const [language, setLanguage] = useState();

    const darkMode = useSelector((state) => state.dark);

    const { t } = useTranslation()


    const [name, setName] = React.useState("Anna Beniard");


    useEffect(() => {
        if (darkMode) {
          document.body.classList.add('dark-mode');
        } else {
          document.body.classList.remove('dark-mode');
        }
      }, [darkMode]);

      useEffect(() => {
        const handleChangeLanguage = () => {
          console.log('la langue a changé ! Nouvelle langue :', i18n.language);
          setLanguage(i18n.language);
        };
        i18n.on('languageChanged', handleChangeLanguage);
        return () => {
          i18n.off('languageChanged', handleChangeLanguage);
        };
      }, [i18n]);

  return (
    <>
    <div className='background-image bckgd '>
     <img src={intro} alt="Accueil" className="img-fluid   " />
     </div>
    
     <NavbarOffCanva />

     <div className="container">
        <div className={`${darkMode ? 'bg-grey ' : ' bg-white'} col-12 text-start homepage hp-div `}>

      
      
        <h1 className={`mt-1  font-h1 ${
                      language === "he" ? " text-end me-4" : "no-auto-rtl text-start"
                    }`} >{t("accueil.texte1")}</h1>
           <hr className='text-decoration-underline'></hr>
           <div className='d-flex align-items-center col-12 no-auto-rtl div-accueil '>
            <img src={intro} alt="Accueil" className={`img-fluid col-8 image-txt  ${
                      language === "he" ? " mt-5" : "mb-4"
                    }`} />
           
           <div className='size-text mt-1 text-hp'>
           <p className={`mb-1 mt-4 ${
                      language === "he" ? " auto-rtl mt-5" : ""
                    }`}  dangerouslySetInnerHTML={{ __html: t('accueil.texte2') }}></p>
         
           <p className='mb-1'>{t("accueil.texte3")}</p>
           <br />
           
           <p className='mb-1 txt4'>{t("accueil.texte4")}</p>
           <Link to='/cv' className=" ">
            <button className={`purple mthp-1 btn-hp ${
                      language === "he" ? "  mt-4 " : ""
                    }` }><p className='m-auto'>{t("accueil.entrer")}</p></button>
         
        </Link>  
           </div>
          
           </div>
             
        </div>
    </div>

    </>
  )
}

export default Accueil
