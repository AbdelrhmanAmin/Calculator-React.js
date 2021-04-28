/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [data, setData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (btn) => {
    const result = calculate(data, btn);
    setData(result);
  };
  const { total, next, operation } = data;
  return (
    <div>
      <h1>
        Calculator
      </h1>
      <Display total={total} opt={operation} next={next} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
