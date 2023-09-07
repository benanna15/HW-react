import React, {useState} from 'react'
import profil from "../../../assets/profil.png"

import "./Header.css"
const Header = (props) => {
  console.log("props depuis Header", props)
  const [changeColor, setChangeColor] = useState("red");
  

  return (
    <div className="conteneur d-flex justify-content-between">
       {/*  <div className="normal-flex">
        <div className="haut-gauche"  >
          <h1>{props.name}</h1>
           <h2>Développeur Full-Stack</h2> */}
           <div className="haut-gauche" >
           <img className="img-haut" src={profil} title=" de Prénom Nom" alt="Prénom Nom" />
            {/*  <ul className='texte-droite'>
              <li>Email : adresse@exemple.com</li>
              <li>Téléphone : 1234567890</li>
              <li>Adresse : Ville, Pays</li>
            </ul> */}
        </div> 
        <div className="haut-droit">
        <button class="Btnt">
   <svg class="svgIcon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
   <span class="icon2"></span>
   <span class="tooltip">Download</span>
</button>
        </div>

        
  </div> 
  )
}

export default Header


  // console.log("props Header", props) {props.name}