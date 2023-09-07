import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import NavbarOffCanva from '../../components/NavbarBoot/NavbarOffCanva';
import i18n from '../../i18n/config';
import useDocumentTitle from '../../components/UseCustom/useDocumentTitle';
import useFetch from '../../components/UseCustom/useFetch';


const Blog = () => {
 const [data, setData] = useState([]);
  const [activeFooter, setActiveFooter] = useState(false);
  const [language, setLanguage] = useState('');
  const [valueInput, setValueInput] = useState('');
  const [resultat, setResultat] = useState([]);

  useDocumentTitle("blog de ouf")
  

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

  const HandleFooter = () => {
    setActiveFooter(!activeFooter);
  };

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
      <NavbarOffCanva />
      <div className='container'>
        <input type='text' value={valueInput} onChange={handleInputChange} />
        {articlesToDisplay.length > 0 ? (
          <>
            <h1>Section Blog</h1>
            {articlesToDisplay.map((row) => (
              <Link key={row.id} className='text-decoration-none text-dark' to={`/article/${row.id}`}>
                <div className='bg-secondary shadow-lg rounded m-3 p-3'>
                  <img src={row.image} className='img-fluid image-size' alt='' />
                  <h2>{language === 'he' ? row.titleHE : language === 'en' ? row.titleEN : row.title}</h2>
                  <p>
                    {language === 'he'
                      ? row.articleHE
                      : language === 'en'
                      ? row.articleEN
                      : row.article /* .slice(0, 100) */}
                    ...
                  </p>
                  <p>{language === 'he' ? row.auteurHE : language === 'en' ? row.auteurEN : row.auteur}</p>
                </div>
              </Link>
            ))}
          </>
        ) : (
          <div>Aucun résultat à votre requête</div>
        )}
        <Link to='/'>
          <button className='btn btn-primary'>Retourner à la page initiale</button>
        </Link>
      </div>

      <div>Hello blog</div>
      <button onClick={() => HandleFooter()}>active Footer</button>
    </>
  );
};

export default Blog;
