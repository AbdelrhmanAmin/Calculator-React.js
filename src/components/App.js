/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (btn) => {
    const data = this.state;
    const result = calculate(data, btn);
    this.setState(result);
    console.log(this.state);
  }

  render() {
    const { total, next } = this.state;
    return (
      <div>
        <h1>
          Calculator
        </h1>
        <Display value={next || total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
