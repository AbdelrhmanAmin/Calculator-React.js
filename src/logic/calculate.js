/* eslint-disable consistent-return */
/* eslint-disable no-lonely-if */
/* eslint-disable no-unused-vars */

import operate from './operate';

const calculate = (dataObjt, buttonName) => {
  let { total = '', next = '', operation = '' } = dataObjt;
  if (!total) total = '';
  if (!next) next = '';
  let btn = buttonName.target.firstChild.data;
  switch (btn) {
    case 'AC':
      total = '';
      next = '';
      operation = '';
      break;
    case '+/-':
      total = -total;
      next = -next;
      break;
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '.':
      if (btn === '.' && total.includes(btn) && (operation === '' || !operation)) {
        btn = '';
      }
      if (btn === '.' && next.includes(btn)) {
        btn = '';
      }
      if (operation === '' || !operation) { total = `${total}${btn}`; } else next = `${next}${btn}`;
      break;
    case '=':
      return { total: operate(total, next, operation), next: '', operation: '' };
    default:
      operation = btn;
      break;
  }
  return { total, next, operation };
};
export default calculate;
