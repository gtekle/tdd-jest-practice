const capitalize = require('./Capitalize.js');

describe("Capitalize", () => {
  test("given alphabetic string", () => {
    expect(capitalize("test")).toBe("Test");
  })

  test("given empty string", () => {
    expect(() => capitalize(""))
      .toThrow('Empty string exception');
  })

  test("given alphabetic-numeric string", () => {
    expect(() => capitalize("1test34test"))
      .toThrow('String has non-alphabetic characters');
  })

})