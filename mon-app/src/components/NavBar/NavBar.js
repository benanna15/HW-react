import React from 'react'
import "./NavBar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
        <div className="conteneur">
        <div className="flex-menu">
            {/* <a href="index.html">Accueil</a> */}
            {/* <a href="cv.html">Mon c.v.</a> */}
             {/* <a href="folio.html">Folio</a> */}
             {/* <a href="contact.html">Contact</a> */}
            <Link to="/"> Accueil </Link>
            <Link to="/cv"> Mon CV </Link>
            <Link to="/blog"> Blog </Link>
            <Link to="/contact"> Contact</Link>
            <Link to="/compteur"> Compteur </Link>
            <Link to="/liste"> Liste </Link>
            <Link to="/toggles"> Toggle </Link>
            <Link to="/object"> Object </Link>

        </div>
        </div>
    </nav>
  )
}

export default NavBar
