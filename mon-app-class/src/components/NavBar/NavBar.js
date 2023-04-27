import React, { Component } from 'react';
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

class NavBar extends Component {
  changeOnOver() {
    const element = document.getElementsByClassName("flex-menu")[0];
    element.style.border = "2px blue solid";
  }

  render() {
    return (
      <nav>
        <div className="conteneur">
          <div className="flex-menu" onMouseOver={this.changeOnOver}>
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
                <Dropdown.Item as={Link} to="/Compteur" >Compteur useEffect</Dropdown.Item>
                <Dropdown.Item >Something else</Dropdown.Item>
                <Dropdown.Item as={Link} to="/SetIntervalCompo">Set Interval</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MouseMove">Mouse Move</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
