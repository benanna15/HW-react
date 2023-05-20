import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom" // step 1 jimporte le link

import { useTranslation } from 'react-i18next';

const Blog = () => {
  const [data, setData] = useState();
  const [activeFooter, setActiveFooter] = useState(false);
  const [language, setLanguage] = useState("en");
  const { t, i18n } = useTranslation();

  useEffect(() => {

    axios.get('https://crud-webschool-32dd1a.appdrag.site/api/getAllArticles', {
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
      // La langue a changé, faites quelque chose ici...
      console.log('La langue a changé ! Nouvelle langue :', i18n.language);
      setLanguage(i18n.language)
    };
    
    i18n.on('languageChanged', handleChangeLanguage);

    // Nettoyage : supprime l'écouteur d'événement lorsque le composant est démonté
    return () => {
      i18n.off('languageChanged', handleChangeLanguage);
    };
  }, [i18n]);

  const HandleFooter = () => {
    setActiveFooter(!activeFooter)
  }

  return (
    <>
      <div className='container'>
        <h1>Section Blog</h1>
        {

          data?.map((row) => (
            // je place mon link avec les backticks
            <Link className='text-decoration-none text-dark' key={row.id} to={`/article/${row.id}`}>

              <div key={row.id} className='bg-secondary shadow-lg rounded m-3 p-3'>
                <h2>{ language === "fr" ? row.title : row.titleEn}</h2>
                <p>{language === "fr" ?  row.articles?.slice(0, 100) : row.articlesEn?.slice(0, 100)  }...</p>
                <img src={row.imageArticle} className='img-fluid' alt="" />
                <p>{row.auteur}</p>

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
