import React from 'react'
import "./Header.css"

const Header = (props) => {
  return (
    <div class="conteneur">
        <div class="normal-flex">
            <div class="haut-gauche">
                <h1>{props.name}</h1>
                <strong><span>C</span>ommunication</strong> /
                <strong><span>M</span>arketing</strong> /
                <strong><span>D</span>igital</strong>
            </div>
            <div class="haut-droit">
                <a href="#">Télécharger mon c.v.</a>
            </div>
        </div>
    </div> 
)
}

export default Header
