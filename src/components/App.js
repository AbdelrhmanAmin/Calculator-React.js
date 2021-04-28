/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(btn) {
    const data = this.state;
    const result = Calculate(data, btn);
    this.setState({
      total: result.total ? result.total : null,
      next: result.next ? result.next : null,
      operation: result.operation ? result.operation : null,
    });
  }

  render() {
    const { total, next } = this.state;
    return (
      <fragment>
        <h1>
          Milestone #2
        </h1>
        <Display value={next || total} />
        <ButtonPanel handleClick={this.handleClick} />
      </fragment>
    );
  }
}

export default App;
