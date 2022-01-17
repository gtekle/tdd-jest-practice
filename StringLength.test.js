const stringLength = require('./StringLength.js');

it("string length", () => {
  expect(stringLength("test")).toBe(4);
})