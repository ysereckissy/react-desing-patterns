import React, { Component } from 'react';

import Buttons from './Buttons';

import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleDecrement() {
    const { counter } = this.state;
    this.setState({
      counter: counter - 1,
    });
  }

  handleIncrement() {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1,
    });
  }

  render() {
    const { counter } = this.state;
    return (
      <div>
        <h1>
          {counter}
        </h1>
        <Buttons
          onDecrement={this.handleDecrement}
          onIncrement={this.handleIncrement}
        />
      </div>
    );
  }
}

export default Counter;
