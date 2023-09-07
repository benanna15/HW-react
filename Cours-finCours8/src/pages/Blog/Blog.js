import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom" // step 1 jimporte le link
import NavbarOffCanva from '../../components/NavbarBoot/NavbarOffCanva'
import i18n from '../../i18n/config'
import useDocumentTItle from '../../components/useCustoms/useDocumentTItle'
import useFetch from '../../components/useCustoms/useFetch'
import useWindowSize from '../../components/useCustoms/useResize'
import { useDispatch, useSelector } from 'react-redux'
import { setArticles , getArticles , setArticleSelected } from "../../redux/slices/blog.slice"


const Blog = () => {
  const [activeFooter, setActiveFooter] = useState(false);
  const [language, setLanguage] = useState();
  const [valueInput, setValueInput] = useState('');
  const [resultat, setResultat] = useState([]);

  const dispatch = useDispatch()

  const GETARTICLES = useSelector(getArticles)

  useDocumentTItle("blog de ouf")
  const size = useWindowSize()
  console.log(size)


  useEffect(() => {
    console.log("language", language)
  }, [language]);

  // }, []);

  const { data, loading, error } = useFetch("https://crud-webschool-32dd1a.appdrag.site/api/getAllArticles")
  dispatch(setArticles(data))



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

  const handleInputChange = (e) => {
    console.log("fonction ouverte")
    const valueRecherche = e.target.value
    console.log("valueRecherche", valueRecherche)
    setValueInput(valueRecherche)

    const resultFilter = data.filter(article => article.articles.toLocaleLowerCase().includes(valueRecherche.toLocaleLowerCase()))
    console.log("resultFilter", resultFilter)
    setResultat(resultFilter)

  }

  return (
    <>
      <NavbarOffCanva />
      <div className='container'>
        <h1>Section Blog</h1>
        <input type="text" value={valueInput} onChange={handleInputChange} />

        {resultat.length > 0 ?
          (
            <div>
              <h6>Resultat de la recherche</h6>
              <div>
                {
                  resultat.map(article => (
                    <div key={article.id}>
                      titre de l'article : {article.title}
                      <Link to={`/article/${article.id}`}>
                        <button className='btn btn-success'>consulter cet article</button>
                      </Link>
                    </div>
                  ))
                }
              </div>
            </div>
          )
          :
          (
            <div>Aucun resultat a votre requete</div>
          )
        }
        {
          GETARTICLES?.map((row) => (
            // je place mon link avec les backticks
            <Link key={row.id} className='text-decoration-none text-dark' to={`/article/${row.id}`}>

              <div onClick={()=> dispatch(setArticleSelected(row.id))} className='bg-secondary shadow-lg rounded m-3 p-3'>
                <h2>{language === "fr" ? row.title : row.titleEn}</h2>
                <p>{language === "fr" ? row.articles?.slice(0, 100) : row.articlesEn?.slice(0, 100)}...</p>
                {size.width < 400 ?
                  <img src={row.imageArticle} height={50} className='img-fluid border border-danger' alt="" />
                  :
                  <img src={row.imageArticle} className='img-fluid' alt="" />

                }


                <p>{row.auteur}</p>

              </div>
            </Link>
          ))
        }
        {error && <p>{error}</p>}
        {loading && loading}
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
