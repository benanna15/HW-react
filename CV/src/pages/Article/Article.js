import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useLocation, useParams  } from "react-router-dom"
import NavbarOffCanva from '../../components/NavbarBoot/NavbarOffCanva'
import i18n from '../../i18n/config';
import { useTranslation } from 'react-i18next';
import { initReactI18next } from 'react-i18next';
import Footer from '../Cv/Footer/Footer';
import cCoffeeLong from '../../assets/cCoffeeLong.png'
import { Link } from 'react-router-dom';
import './Article.css'

// Configuration de i18n


const Article = () => {
    const [data, setData] = useState();
    const [language, setLanguage] = useState(i18n.language);
    const [name, setName] = React.useState("Anna Beniard");
    const { t } = useTranslation()

    const getParams = useParams();
    console.log(getParams.id);

    let location = useLocation()
    console.log("",location.pathname)
    useEffect(() => {
        axios.get(`https://promises-cb263f.appdrag.site/api/getAllApiID?id=${location?.pathname.slice(9)}`, {
            params: {
                "id": getParams.id,
                "AD_PageNbr": "1",
                "AD_PageSize": "500"
            }
        }).then(function (response) {
            console.log(response.data);
            console.log(response.data.Table);
            setData(response.data.Table[0])
        });
    }, [getParams.id]);

    
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
        <div className='background-image bckgd-blog'>
     <img src={cCoffeeLong} alt="Accueil" className="img-fluid    " />
     </div>

       <NavbarOffCanva />
       <h1 className='d-flex flex-column marg-top align-items-ends me-4 font1 p-3 position-titre dir-ltr  '>{t("blog.titleblog")} <br /> <span className="font2">{t("blog.titleblog1")}</span></h1>

        
        <div className='container margin '>
        
    
            {data &&
             <div className="col-12 bg-light shadow rounded-4  p-3 border-saumon ">
               {/*  <div>{data?.id}</div>  */}
               <h1  className={`text-center font-title  ${
                    language === "he"
                      ? "  auto-rtl"
                      : "  no-auto-rtl "}`} >{language === 'he' ? data?.titleHE : language === 'en' ? data?.titleEN : data?.title}</h1> 
               
            
                <p className='p mt-4 mb-2'  >{language === 'he' ? data?.articleHE : language === 'en' ? data?.articleEN : data?.article}</p> 
             
                <img src={data?.image} alt=''  className={`  ${
                    language === "he"
                      ? "  img-size-left"
                      : "  img-size "}`} />
                
                    <p className='ms-1  '>
                    {language === 'he' ? (
    <>
      {data?.articleHE1}
      <br />
      <br />
      {data?.articleHE2}
      <br />
      <br />
      {data?.articleHE3}
      <br />
      <br />
      {data?.articleHE4}
      <br />
      <br />
      {data?.articleHE5}
      <br />
      <br />
      {data?.articleHE6}
      <br />
      <br />
      {data?.articleHE7}
    </>
  ) : language === 'en' ? (
    <>
    {data?.articleEN1}
    <br />
    <br />
    {data?.articleEN2}
    <br />
    <br />
    {data?.articleEN3}
    <br />
    <br />
    {data?.articleEN4}
    <br />
    <br />
    {data?.articleEN5}
    <br />
    <br />
    {data?.articleEN6}
    <br />
    <br />
    {data?.articleEN7}
    </>
  ) : (
    <>
    {data?.article1} 
    <br />
    <br />
    {data?.article2}
    <br />
    <br />
    {data?.article3}
    <br />
    <br />
    {data?.article4}
    <br />
    <br />
    {data?.article5}
    <br />
    <br />
    {data?.article6}
    <br />
    <br />
    {data?.article7}
    </>
  )}
  </p>
                  
 

                 

             
            
                
                 
 
                   
                
               
              
                <div  className={`mb-4  ${
                    language === "he"
                      ? "  m-left"
                      : "  text-end "}`}>
                <Link to="/blog" className="cta">
                      <span class="hover-underline-animation">{t("blog.returnblog")} </span>
                      <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal" className={language === 'he' ? 'invert-arrow' : ''}>
                          <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
                      </svg>
                  </Link>
                 </div>
               {/*  <p>auteur : {data?.auteur} </p> */}
                </div>
            }  
        </div>
       

 

   <Footer name={name}/>
   </>
    )
}

export default Article
