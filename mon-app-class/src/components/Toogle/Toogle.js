import React, { Component } from 'react';

class Toogle extends Component {
  constructor(props) {
    super(props);
    this.state = { toogle: false };
  }

  ActivToogle = () => {
    this.setState({ toogle: !this.state.toogle });
  };

  render() {
    return (
      <div className='toggle-page'>
        Hello toogle
        {this.state.toogle === true && (
          <div className='toggle-text'>Coucou</div>
        )}
        <button className='toggle-button' onClick={this.ActivToogle}>
          Click ici
        </button>
      </div>
    );
  }
}

export default Toogle;
