import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n/config'


const Portfolio = () => {
  const [data, setData] = useState();
  const [language, setLanguage] = useState();
  const { t } = useTranslation()
  useEffect(() => {
    
    console.log("mon composant est montE",process.env)


    axios.get('https://car-parts-99db31.appdrag.site/api/getAllProjects', {
    params: {
      "AD_PageNbr" : "1",
      "AD_PageSize" : "500"
    }
  }).then(function(response){
    console.log(response.data);
      setData(response.data.Table)
    });

  }, []);

  useEffect(() => {
    const handleChangeLanguage = () => {
     console.log('la langue a changé ! Nouvelle langue :', i18n.language);
     setLanguage(i18n.language)
    }
    i18n.on('languageChanged', handleChangeLanguage)
    return () => {
      i18n.off('languageChanged',handleChangeLanguage)
    }
   },[i18n])
    

  return (
    <div className='container'>
      <h1>{t("Portfolio.title")}</h1>
      { 
        data?.map((row)=>(
          // je place mon link avec les backticks
        
          
          <div key={row.id} className='bg-white shadow-lg rounded m-auto mt-3 p-3  col-md-8 col-lg-6'>
            <h2>{language === "he" ? row.TitreHE : (language === "en" ? row.TitleEN : row.Title)}</h2>
            <img src={row.Image} className='img-fluid shadow rounded' alt="" />
            <a href={row.url}>{row.url}</a>
          {/*  <p>{row.description}...</p> */}
            <h4 className='mt-2'>{language === "he" ? row.Titre_1HE : (language === "en" ? row.Titre_1EN : row.Titre_1)}</h4>
               <p>{language === "he" ? row.Texte1HE : (language === "en" ? row.Texte1EN : row.Texte1)}</p>
               <h4>{language === "he" ? row.Titre_textHE : (language === "en" ? row.Titre_textEN : row.Titre_text)}</h4>
               <p>{language === "he" ? row.TexteHE : (language === "en" ? row.TexteEN : row.Texte)}</p>
            <figure className='text-center'>
              
            </figure>
            
          </div>
         
        ))
      }
    </div>
  )
}

export default Portfolio
