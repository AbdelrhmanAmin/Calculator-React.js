/* eslint-disable no-unused-vars */
import Big from 'big.js';

const Operate = (num1, num2, operation) => {
  const n1 = Big(num1);
  const n2 = Big(num2);
  if (operation === '-') {
    return n1 - n2;
  } if (operation === '+') {
    return n1 + n2;
  } if (operation === '/' || operation === '÷') {
    return n1 / n2;
  } if (operation === '*') {
    return n1 * n2;
  } if (operation === '%') {
    return n1 % n2;
  }
};

export default Operate;
