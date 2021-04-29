import calculate from '../../logic/calculate';

describe('Calculate', () => {
  let calc = {
    total: '',
    next: '',
    operation: '',
  };
  describe('Calculate methods', () => {
    it('Plus/Minus returns the opposite', () => {
      calc.total = 1;
      const result = calculate(calc, '+/-');
      expect(result.total).toBe(-1);
    });
    it('Add numbers', () => {
      calc.total = 1;
      calc.next = 1;
      calc.operation = '+';
      calc = calculate(calc, '+');
      const result = calculate(calc, '=');
      expect(result.total).toEqual('2');
    });
    it('Subtract numbers', () => {
      calc.total = 1;
      calc.next = 1;
      calc.operation = '-';
      calc = calculate(calc, '-');
      const result = calculate(calc, '=');
      expect(result.total).toEqual('0');
    });
    it('Multiply numbers', () => {
      calc.total = 1;
      calc.next = 1;
      calc.operation = '*';
      calc = calculate(calc, '*');
      const result = calculate(calc, '=');
      expect(result.total).toEqual(0);
    });
    it('Divide numbers', () => {
      calc.total = 9;
      calc.next = 3;
      calc.operation = '÷';
      calc = calculate(calc, '÷');
      const result = calculate(calc, '=');
      expect(result.total).toEqual('3');
    });
    it('Dividing numbers by zero equals zero', () => {
      calc.total = 9;
      calc.next = 0;
      calc.operation = '÷';
      calc = calculate(calc, '÷');
      const result = calculate(calc, '=');
      expect(result.total).toEqual(0);
    });
  });
  describe('AC testing', () => {
    test('When AC is clicked, total isn\'t null', () => {
      calc = calculate(calc, 'AC');
      expect(calc.total).not.toBe(null);
    });

    test('When AC is clicked, operation isn\'t null', () => {
      expect(calc.operation).not.toBe(null);
    });

    test('When AC is clicked, next isn\'t null', () => {
      expect(calc.next).not.toBe(null);
    });
  })
});
