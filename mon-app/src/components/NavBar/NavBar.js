import React, {useEffect} from 'react'
import "./NavBar.css"
import { Link } from "react-router-dom"
import { Dropdown } from "react-bootstrap"

const NavBar = () => {

const changeOnOver=() => {
  const element= document.getElementsByClassName("flex-menu")[0]

  element.style.border ="2px blue solid"
}

  return (
    <nav>
        <div className="conteneur">
        <div className="flex-menu" onMouseOver={() => {changeOnOver()}}>
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

            <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              React
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/UseEffectcompo">Action</Dropdown.Item>
              <Dropdown.Item  as={Link} to="/Compteur" >Compteur useEffect</Dropdown.Item>
              <Dropdown.Item >Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

            

        </div>
        </div>
    </nav>
  )
}

export default NavBar
