import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      changeColor: 'red',
    };
  }

  handleClick = () => {
    this.setState({
      changeColor: 'blue',
    });
  };

  render() {
    const { name } = this.props;
    const { changeColor } = this.state;

    return (
      <div className="conteneur">
        <div className="normal-flex">
          <div className="haut-gauche">
            <h1 className={`text-${changeColor}`} onClick={this.handleClick}>
              {name}
            </h1>
            <strong>
              <span>C</span>ommunication
            </strong>{' '}
            /<strong>
              <span>M</span>arketing
            </strong>{' '}
            /<strong>
              <span>D</span>igital
            </strong>
          </div>
          <div className="haut-droit">
            <a href="#">Télécharger mon c.v.</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
