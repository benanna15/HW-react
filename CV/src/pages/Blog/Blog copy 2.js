import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavbarOffCanva from '../../components/NavbarBoot/NavbarOffCanva';
import i18n from '../../i18n/config';
import useDocumentTitle from '../../components/UseCustom/useDocumentTitle';
import useFetch from '../../components/UseCustom/useFetch';
import { useTranslation } from 'react-i18next';
import cCoffeeLong from '../../assets/cCoffeeLong.png'
import './Blog.css'
import Footer from '../Cv/Footer/Footer';

const Blog = () => {
 const [data, setData] = useState([]);
  /* const [activeFooter, setActiveFooter] = useState(false); */
  const [language, setLanguage] = useState(i18n.language);
  const [valueInput, setValueInput] = useState('');
  const [resultat, setResultat] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { t } = useTranslation()


  useDocumentTitle("blog de ouf")
  
  const handleToggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };
  
  useEffect(() => {
    axios
      .get('https://promises-cb263f.appdrag.site/api/getAllArticles', {
        params: {
          AD_PageNbr: '1',
          AD_PageSize: '500',
        },
      })
      .then(function (response) {
        console.log(response.data.Table);
        setData(response.data.Table);
      }).catch (console.log("error")) 
  }, []); 

 // const { data , loading , error }=useFetch('https://promises-cb263f.appdrag.site/api/getAllArticles')

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

 /*  const HandleFooter = () => {
    setActiveFooter(!activeFooter);
  }; */

  const handleInputChange = (e) => {
    const valueRecherche = e.target.value;
    setValueInput(valueRecherche);

    const resultFilter = data.filter(
      (row) =>
        row.article.toLowerCase().includes(valueRecherche.toLowerCase()) ||
        row.auteur.toLowerCase().includes(valueRecherche.toLowerCase()) ||
        row.title.toLowerCase().includes(valueRecherche.toLowerCase())
    );
    setResultat(resultFilter);
  };

  let articlesToDisplay;
  if (valueInput === '') {
    articlesToDisplay = data;
  } else {
    articlesToDisplay = resultat.length > 0 ? resultat : [];
  }
  console.log('valueInput', valueInput);

  console.log('articlesToDisplay', articlesToDisplay);

  return (
    <>
     <div className='background-image'>
     <img src={cCoffeeLong} alt="Accueil" className="img-fluid    " />
     </div>
  <NavbarOffCanva />
  <h1 className='d-flex flex-column align-items-end me-4 mt-2 font1 p-3 position-titre no-auto-rtl '>{t("blog.titleblog")} <br /> <span className="font2">{t("blog.titleblog1")}</span></h1>

  <div className='container'>
    <div className=' position-titre'>
  
     

      <div className='d-flex justify-content-end'>
        {showSearchBar && <input type='text' value={valueInput} onChange={handleInputChange} className="float-left" />}
        <i className="bi bi-search pe-4 ms-1 mb-2 pt-1 logo" onClick={handleToggleSearchBar}></i>
      </div>
    </div>

    {articlesToDisplay.length > 0 && (
        
      <>
     
        <div className='row  '>
          <div className='col-lg-8  '>
            {/* Gros article */}
            {articlesToDisplay[0] && (
            <Link to={`/article/${articlesToDisplay[0].id}`} className='text-decoration-none text-dark'>
              <div className='bg-img-color big-article shadow-lg rounded col-12 mt-3 m-auto pe-3 ps-3 pt-3'>
                <img src={articlesToDisplay[0].image} className='img-fluid m-auto ' alt='' />
                <h2 className='mt-2'>{language === 'he' ? articlesToDisplay[0].titleHE : language === 'en' ? articlesToDisplay[0].titleEN : articlesToDisplay[0].title}</h2>
                <p style={{ display: 'inline-block' }}>
                  {language === 'he'
                    ?(articlesToDisplay[0].articleHE + articlesToDisplay[0].articleHE1 + articlesToDisplay[0].articleHE2 + articlesToDisplay[0].articleHE3.slice(0, 2300)) 
                    : language === 'en'
                    ? articlesToDisplay[0].articleEN + articlesToDisplay[0].articleEN1 + articlesToDisplay[0].articleEN2 + articlesToDisplay[0].articleEN3.slice(0, 2300)
                    : articlesToDisplay[0].article + articlesToDisplay[0].article1 + articlesToDisplay[0].article2 + articlesToDisplay[0].article3.slice(0, 2350)}
                  ...
                </p>
                <p>{language === 'he' ? articlesToDisplay[0].auteurHE : language === 'en' ? articlesToDisplay[0].auteurEN : articlesToDisplay[0].auteur}</p>
              </div>
            </Link>
            )}
          </div>

          <div className='col-lg-4'>
            {/* Deux articles côte à côte */}
            {articlesToDisplay.length > 1 && (
              <>
                <div className='row'>
                  <div className='col-12  '>
                  {articlesToDisplay[1] && (
                    <Link to={`/article/${articlesToDisplay[1].id}`} className='text-decoration-none text-dark'>
                      <div className='bg-img-color shadow-lg rounded col-11  mt-3 mb-4 m-auto p-3' >
                        <img src={articlesToDisplay[1].image} className='img-fluid m-auto image-size' alt='' />
                        <h2>{language === 'he' ? articlesToDisplay[1].titleHE : language === 'en' ? articlesToDisplay[1].titleEN : articlesToDisplay[1].title}</h2>
                        <p>
                          {language === 'he'
                            ? articlesToDisplay[1].articleHE.slice(0, 100)
                            : language === 'en'
                            ? articlesToDisplay[1].articleEN.slice(0, 100)
                            : articlesToDisplay[1].article.slice(0, 100)}
                          ...
                        </p>
                        <p>{language === 'he' ? articlesToDisplay[1].auteurHE : language === 'en' ? articlesToDisplay[1].auteurEN : articlesToDisplay[1].auteur}</p>
                      </div>
                    </Link>
                    )}
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12'>
                  {articlesToDisplay[2] && (
                    <Link to={`/article/${articlesToDisplay[2].id}`} className='text-decoration-none text-dark'>
                      <div className='bg-img-color shadow-lg rounded col-11  mt-1 mb-5 m-auto p-3'>
                        <img src={articlesToDisplay[2].image} className='img-fluid m-auto image-size' alt='' />
                        <h2>{language === 'he' ? articlesToDisplay[2].titleHE : language === 'en' ? articlesToDisplay[2].titleEN : articlesToDisplay[2].title}</h2>
                        <p>
                          {language === 'he'
                            ? articlesToDisplay[2].articleHE.slice(0, 100)
                            : language === 'en'
                            ? articlesToDisplay[2].articleEN.slice(0, 100)
                            : articlesToDisplay[2].article.slice(0, 100)}
                          ...
                        </p>
                        <p>{language === 'he' ? articlesToDisplay[2].auteurHE : language === 'en' ? articlesToDisplay[2].auteurEN : articlesToDisplay[2].auteur}</p>
                      </div>
                    </Link>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Deux articles par ligne */}
        <div className='row'>
          {articlesToDisplay.slice(3).map((row) => (
            <div className='col-lg-6' key={row.id}>
              {articlesToDisplay[3] && (
              <Link to={`/article/${row.id}`} className='text-decoration-none text-dark'>
                <div className='bg-img-color shadow-lg rounded col-12 mt-3 mb-3 m-auto p-3'>
                  <img src={row.image} className='img-fluid m-auto image-size' alt='' />
                  <h2>{language === 'he' ? row.titleHE : language === 'en' ? row.titleEN : row.title}</h2>
                  <p>
                    {language === 'he' ? row.articleHE.slice(0, 100) : language === 'en' ? row.articleEN.slice(0, 100) : row.article.slice(0, 100)}
                    ...
                  </p>
                  <p>{language === 'he' ? row.auteurHE : language === 'en' ? row.auteurEN : row.auteur}</p>
                </div>
              </Link>
              )}
            </div>
          ))}
        </div>
      </>
    )}

    {articlesToDisplay.length === 0 && <div>Aucun résultat à votre requête</div>}
   
   {/*  <Link to='/blog'>
      <button className='btn btn-primary'>Retourner à la page d'accueil</button>
    </Link>
    */}
  </div>
  <Footer/>
</>

  
  );
};

export default Blog;
