/* eslint-disable no-unused-vars */
import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

function App() {
  return (
    <>
      <h1>
        Milestone #2
      </h1>
      <Display value="0" />
      <ButtonPanel />
    </>
  );
}

export default App;
