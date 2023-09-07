import React, { useState , useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import i18next from '../../i18n/config';
import flagEnglish from '../../assets/flags/flagEnglish.png'
import logoFr from '../../assets/flags/drapeauFr.png'
import { NavDropdown } from 'react-bootstrap';
import  drapeauHe from '../../assets/flags/drapeauHe.jpeg'

const DropI18N = () => {
    const { t , i18n} = useTranslation()
    const [selectedLanguage, setSelectedLanguage] = useState('');
    useTranslation();

    useEffect(() => {
        setSelectedLanguage(i18n.language);
        if (selectedLanguage === 'he') {
            document.querySelector('html').setAttribute('lang', 'he');
            document.querySelector('html').setAttribute('dir', 'rtl');
         
          
            const noAutoRtlElements = document.querySelectorAll('.no-auto-rtl');
            noAutoRtlElements.forEach(element => {
              element.setAttribute('dir', 'ltr');
            });

            const autoRtlElements = document.querySelectorAll('.auto-rtl');
autoRtlElements.forEach(element => {
  element.setAttribute('dir', 'rtl');
})

          }  else {
            document.querySelector('html').setAttribute('lang', '');
            document.querySelector('html').setAttribute('dir', '');
          }
        }, [i18n.language, selectedLanguage]);

        
     
    
    function handleClick(lang) {
        i18next.changeLanguage(lang)
    }

    return (
        <>
       {/*  <NavDropdown title={t("navbar.langue") } > */}
            
            <NavDropdown.Item>
                <span onClick={() => {
                    handleClick('fr');
                }}>
                  <img width="35px" style={{ marginRight: '5px' }} src={logoFr} alt="logo France" />
                    Français
                </span>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <span onClick={() => {
                    handleClick('en');
                }}>
                  <img width="35px" style={{ marginRight: '5px' }} src={flagEnglish} alt="logo Angleterre" />
                  English
                </span>
            </NavDropdown.Item>
            <NavDropdown.Item>
                <span onClick={() => {
                    handleClick('he');
                }}>
                  <img width="35px" style={{ marginRight: '5px' }} src={drapeauHe} alt="logo Israel"  />
                  עברית
                </span>
            </NavDropdown.Item>
        {/* </NavDropdown> */}
        </>
    )
}

export default DropI18N