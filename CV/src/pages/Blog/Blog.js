import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavbarOffCanva from '../../components/NavbarBoot/NavbarOffCanva';
import i18n from '../../i18n/config';
import useDocumentTitle from '../../components/UseCustom/useDocumentTitle';
import { useTranslation } from 'react-i18next';
import cCoffeeLong from '../../assets/cCoffeeLong.png';
import './Blog.css';
import Footer from '../Cv/Footer/Footer';


const Blog = () => {
  const [data, setData] = useState([]);
  const [language, setLanguage] = useState(i18n.language);
  const [valueInput, setValueInput] = useState('');
  const [resultat, setResultat] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { t } = useTranslation();

  useDocumentTitle("blog de ouf");

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
        console.log(response.data.Table);
      })
      .catch(console.log('error'));
  }, []);

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

  return (
    <>
      <div className='background-image bckgd-blog'>
        <img src={cCoffeeLong} alt='Accueil' className='img-fluid' />
      </div>
      <NavbarOffCanva />
      <h1 className='d-flex flex-column marg-top align-items-ends me-4 font1 p-3 position-titre dir-ltr '>
        {t('blog.titleblog')} <br /> <span className='font2'>{t('blog.titleblog1')}</span>
      </h1>

      <div className='container margin-top'>
        <div className='position-titre'>
          <div className='d-flex justify-content-end search dir-ltr'>
            {showSearchBar && <input type='text' value={valueInput} onChange={handleInputChange} className='float-left encart-search' />}
            <i className='bi bi-search pt-1 pb-1 ps-2 pe-2 ms-1 logo' onClick={handleToggleSearchBar}></i>
          </div>
        </div>

        {articlesToDisplay.length > 0 ? (
          <div className=''>
            {articlesToDisplay.map((article) => (
              <div className='mx-auto col-10 mb-4 resp-article' key={article.id}>
                <Link to={`/article/${article.id}`} className='text-decoration-none text-dark '>
                  <div className='article-block bg-img-color shadow-lg rounded m-auto p-3 ' >
                  <h2 className='mt-3 mb-5 title-art  '>{language === 'he' ? article.titleHE : language === 'en' ? article.titleEN : article.title}</h2>
<div className='d-flex div-img'>
                    <img src={article.image} className='img-fluid center-image shadow-lg ' alt='' />
                    <p className='paragraphe '>
                      {language === 'he'
                        ? article.articleHE + article.articleHE1.slice(0, 500)
                        : language === 'en'
                        ? article.articleEN + article.articleEN1.slice(0, 500)
                        : article.article + article.article1.slice(0, 500)}
                      ...
                    </p>
                    <p>{language === 'he' ? article.auteurHE : language === 'en' ? article.auteurEN : article.auteur}</p>
                    </div>
                    <div  className={`mb-4 mt-4 ${
                    language === "he"
                      ? "  margin-left"
                      : "  text-end "}`}>
                  <Link className='cta '
                   to={`/article/${article.id}`}>
                      <span className='hover-underline-animation  margin-top' >{t("blog.suite")} </span>
                      <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal "  className={language === 'he' ? 'invert-arrow' : ''
                      }>
                          <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                      </svg>
                  </Link>
                 </div>
                     </div>
                </Link>
                
              </div>
            ))}
          </div>
        ) : (
          <div className='d-flex justify-content-center'>
            <div>Aucun résultat à votre requête</div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Blog;
