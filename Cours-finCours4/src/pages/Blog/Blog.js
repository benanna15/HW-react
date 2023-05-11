import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom" // step 1 jimporte le link
import NavbarOffCanva from '../../components/NavbarBoot/NavbarOffCanva'
import i18n from '../../i18n/config'

const Blog = () => {
  const [data, setData] = useState();
  const [activeFooter, setActiveFooter] = useState(false);
  const [language, setLanguage] = useState();

  useEffect(() => {
    console.log("language", language);
  }, [language]);
  useEffect(() => {
    
    console.log("mon composant est montE")

    axios.get('https://promises-cb263f.appdrag.site/api/getAllArticles', {
      params: {
        "AD_PageNbr": "1",
        "AD_PageSize": "500"
      }
    }).then(function (response) {
      console.log(response.data.Table);
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
     
   
     

  const HandleFooter = () => {
    setActiveFooter(!activeFooter)
  }

  return (
    <>
      <NavbarOffCanva />
        <div className='container'>
          <h1>Section Blog</h1>
          {
            data?.map((row) => (
              // je place mon link avec les backticks
              <Link key={row.id} className='text-decoration-none text-dark' to={`/article/${row.id}`}>

                <div  className='bg-secondary shadow-lg rounded m-3 p-3'>
                  <img src={row.image} className='img-fluid image-size' alt="" />
                  <h2> {language === "he" ? row.titleHE : language === "en" ? row.titleEN : row.title }</h2>
                  <p>{language === "he" ? row.articleHE : language === "en" ? row.articleEN : row.article /* .slice(0, 100) */ }...</p>
                  
                  <p>{ language === "he" ?  row.auteurHE : (language === "en" ? row.auteurEN : (language === "he" ? row.auteur: ""))}</p>

                </div>
              </Link>
            ))
          }
          <Link to="/">
            <button className="btn btn-primary">retourner a la page initial</button>
          </Link>
        </div>


        <div>Hello blog</div>
        <button onClick={() => HandleFooter()} >active Footer</button>
    </>
  )
}

export default Blog
