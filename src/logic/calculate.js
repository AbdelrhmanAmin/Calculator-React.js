/* eslint-disable no-unused-vars */

import Operate from './operate';

const Calculate = (data, btn) => {
  let { total, next } = data;
  const { operation } = data;
  if (btn === '+/-') {
    total *= -1;
    next *= -1;
  }
  if (
    btn === '+'
    || btn === '-'
    || btn === '*'
    || btn === '÷'
  ) {
    total = Operate(total, next, operation);
  }
  return data;
};
export default Calculate;
