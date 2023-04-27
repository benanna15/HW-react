import React, { Component } from 'react';

class Metier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      metier: 'Fullstack Dev',
      Niveau: 'en formation',
    };
    this.handleClickJunior = this.handleClickJunior.bind(this);
    this.handleClickIntermediaire = this.handleClickIntermediaire.bind(this);
    this.handleClickSenior = this.handleClickSenior.bind(this);
  }

  handleClickJunior() {
    this.setState((prevState) => ({ ...prevState, Niveau: 'Junior' }));
  }

  handleClickIntermediaire() {
    this.setState((prevState) => ({ ...prevState, Niveau: 'Intermediaire' }));
  }

  handleClickSenior() {
    this.setState((prevState) => ({ ...prevState, Niveau: 'Senior' }));
  }

  render() {
    return (
      <div className="metier-page">
        <h1 className="metier-text">
          Je suis {this.state.metier} {this.state.Niveau}
        </h1>
        <button className="metier-1" onClick={this.handleClickJunior}>
          Dans 3 mois je serai
        </button>
        <button className="metier-1" onClick={this.handleClickIntermediaire}>
          Dans 1 an je serai
        </button>
        <button className="metier-1" onClick={this.handleClickSenior}>
          Dans 5 ans je serai
        </button>
      </div>
    );
  }
}

export default Metier;
