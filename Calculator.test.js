const Calculator = require('./Calculator.js');

const calculator = new Calculator();


describe('add()', () => {
  test('given two +ve numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
  })

  test('given two -ve numbers', () => {
    expect(calculator.add(-1, -2)).toBe(-3);
  })

  test('given one -ve and one +ve numbers', () => {
    expect(calculator.add(-1, 2)).toBe(1);
  })
})

describe('subtract()', () => {
  test('given two +ve numbers', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
  })

  test('given two -ve numbers', () => {
    expect(calculator.subtract(-1, -2)).toBe(1);
  })

  test('given one -ve and one +ve numbers', () => {
    expect(calculator.subtract(-1, 2)).toBe(-3);
  })
})

describe('multiply()', () => {
  test('given two +ve numbers', () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  })

  test('given two -ve numbers', () => {
    expect(calculator.multiply(-2, -2)).toBe(4);
  })

  test('given one -ve and one +ve numbers', () => {
    expect(calculator.multiply(-2, 2)).toBe(-4);
  })

  test('given 1 and one +ve numbers', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  })

  test('given 0 and one +ve numbers', () => {
    expect(calculator.multiply(0, 2)).toBe(0);
  })
})

describe('divide()', () => {
  test('given two +ve numbers', () => {
    expect(calculator.divide(6, 2)).toBe(3);
  })

  test('given two -ve numbers', () => {
    expect(calculator.divide(-6, -2)).toBe(3);
  })

  test('given one -ve and one +ve numbers', () => {
    expect(calculator.divide(-6, 2)).toBe(-3);
  })

  test("Divide by zero error", () => {
    expect(() => calculator.divide(6, 0))
      .toThrow('Divide by zero exception');
  })
})
