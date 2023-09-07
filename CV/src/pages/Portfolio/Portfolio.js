import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n/config';
import { useSelector } from 'react-redux';
import { getPseudo } from "../../redux/slices/auth.slice"
import NavbarOffCanva from '../../components/NavbarBoot/NavbarOffCanva';
import Footer from '../Cv/Footer/Footer';
import './Portfolio.css'
import intro from '../../assets/intro.png'


const Portfolio = () => {
  const [data, setData] = useState();
  const [language, setLanguage] = useState(i18n.language);
  const [projet, setProjet] = useState("");
  console.log('projet', projet);
  const { t } = useTranslation();
  
  const [projectLikes, setProjectLikes] = useState({});
  const [projectViews, setProjectViews] = useState({});



  const [stateForm, setStateForm] = useState({
    like: "",
    vue: "",
    time: ""
  });

  const GETPSEUDO = useSelector(getPseudo)

  const darkMode = useSelector((state) => state.dark);
  const [name, setName] = React.useState("Anna Beniard");
  


  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  useEffect(() => {
    console.log('mon composant est monté', process.env);

    axios
      .get('https://car-parts-99db31.appdrag.site/api/getAllProjects', {
        params: {
          AD_PageNbr: '1',
          AD_PageSize: '500',
        },
      })
      .then(function (response) {
        console.log(response.data);
        setData(response.data.Table);
        
      });
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

  const handleButtonClick = (selectedProjet) => {
    if (selectedProjet === 'init') {
      setProjet("");
    } else {
      setProjet(selectedProjet);
    }
  };



  const filteredProducts = data?.filter((row) => row.Texte1 && row.Texte1.toLowerCase().includes(projet.toLowerCase()));

  useEffect(() => {
    
    setProjet("")
  }, []);




 
  
 

  return (
    <>
     <div className='background-image bckgd '>
     <img src={intro} alt="Accueil" className="img-fluid   " />
     </div>
    <NavbarOffCanva />

    <div  className={`${"container texte-center no-auto-rtl "}`}  >

      <button className="buttons mn-4" onClick={() => handleButtonClick('html')} >HTML</button>
      <button className='buttons mn-4' onClick={() => handleButtonClick('javascript')}>JavaScript</button>
      <button className="buttons mn-4" onClick={() => handleButtonClick('react')}>React</button>
      <button className="buttons mn-4" onClick={() => handleButtonClick('react')}>NodesJS</button>
      <button className=" buttons mn-4" onClick={() => handleButtonClick('react')}>Python</button>

      <button className="buttons mn-4" onClick={() => handleButtonClick('init')}>All</button>

      <div className='d-flex flex-wrap justify-content-around  '>
     
      {filteredProducts && filteredProducts.length > 0 ? (
      
        filteredProducts.map((row) => (
         
          <div key={row.id} className={` ${darkMode ? 'bg-grey  text-white' : 'bg-white '} shadow-lg rounded m-3 mb-5 p-3  card`} style={{ width: '30%', minWidth: '250px' }}>
            <h2>{language === 'he' ? row.TitreHE : language === 'en' ? row.TitreEN : row.Titre}</h2>
            
            <a href={row.url}>
            <img src={row.Image} className="img-fluid  shadow rounded" alt="" />
            </a>
            <h4 className="mt-2">
              {language === 'he' ? row.Titre_1HE : language === 'en' ? row.Titre_1EN : row.Titre_1}
            </h4>
            <p>{language === 'he' ? row.Texte1HE : language === 'en' ? row.Texte1EN : row.Texte1}</p>
            <h4>{language === 'he' ? row.Titre_textHE : language === 'en' ? row.Titre_textEN : row.Titre_text}</h4>
            <p>{language === 'he' ? row.TexteHE : language === 'en' ? row.TexteEN : row.Texte}</p>
            <figure className="texte-center">
        
            {/* <div className="d-flex  justify-content-between align-items-end  ">
          
<button className="BtnLike" >
  <span className="leftContainer">
    <svg fill="white" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg">
      <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path>
    </svg>
    <span className="like">Like</span>
  </span>
  <span className="likeCount"></span>
</button>

<div className="ViewContainer" >
  <span className="leftContainer">
    <i className="bi bi-eye"></i>
    <span className="view">View</span>
  </span>
  <span className="viewCount"></span>
</div>



        </div > */}
            </figure>
          </div>
         
        ))
      ) : (
        <div>Aucun article trouvé.</div>
      )}
    </div>
   
 </div>
 <Footer name={name}/>
    </>
  );
};

export default Portfolio;
