const stringLength = require('./StringLength.js');

it("string length", () => {
  expect(stringLength("test")).toBe(4);
})

it("string length out of bound", () => {
  expect(() => stringLength("test test test test"))
    .toThrow('String length is out of range (1 -10)');
  expect(() => stringLength(""))
    .toThrow('String length is out of range (1 -10)');
})