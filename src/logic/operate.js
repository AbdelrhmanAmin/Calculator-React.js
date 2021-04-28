/* eslint-disable no-unused-vars */
import Big from 'big.js';

const Operate = (numberOne, numberTwo, operator) => {
  try {
    const x = new Big(numberOne || 0);
    const y = new Big(numberTwo || 0);
    let result;
    switch (operator) {
      case '%':
        result = x.div(100);
        break;
      case '÷':
        if (x === '0' || y === '0') {
          result = 0;
        } else {
          result = x.div(y);
        }
        break;
      case 'x':
        result = x.times(y);
        break;
      case '+':
        result = x.plus(y);
        break;
      case '-':
        result = x.minus(y);
        break;
      default:
        return 0;
    }
    return result.toString();
  } catch (e) {
    return 0;
  }
};

export default Operate;
