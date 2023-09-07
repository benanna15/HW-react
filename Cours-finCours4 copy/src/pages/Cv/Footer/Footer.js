import React, {useState ,useEffect} from 'react'
import "./Footer.css"
import { useSelector } from 'react-redux';


const Footer = ({name}) => {
  const [changeColor, setChangeColor] = useState("red");

  const StyleRed = {color: changeColor, fontSize: "40px"}
  const darkMode = useSelector((state) => state.dark);



  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <footer className={`${darkMode ? 'bg-dark text-white' : ''}`}>
      <button onClick={()=> setChangeColor("blue")} >Change Couleur</button>
        <nav className="conteneur" ><a href="informations.html" style={StyleRed}>Informations</a> - <a href="mentionslégales.html">Mentions légales</a> - <a href="Contact.html">Contact</a></nav>
        <p className="conteneur" style={StyleRed}>© 2023 Conception et réalisation par {name} Tous droits réservés.</p>
    </footer>
  )
}

export default Footer