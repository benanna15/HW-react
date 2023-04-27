import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    document.title = `le compteur est à ${this.state.counter}`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      document.title = `le compteur est à ${this.state.counter}`;
    }
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  }

  reset = () => {
    this.setState({ counter: 0 });
  }

  render() {
    return (
      <div className='counter-page'>
        <div className='counter'>{this.state.counter}</div>
        <button className='Button-counter' onClick={this.increment}>Increment +</button>
        <button className='Button-counter' onClick={this.decrement}>Decrement -</button>
        <button className='Button-counter' onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Counter;
