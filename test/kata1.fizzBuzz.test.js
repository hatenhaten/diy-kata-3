const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  test("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(6)).toEqual('Fizz');
    expect(fizzBuzz(36699)).toEqual('Fizz');
  });

  test("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(10)).toEqual('Buzz');
    expect(fizzBuzz(1835)).toEqual('Buzz');
  });

  test("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
    expect(fizzBuzz(2715)).toEqual('FizzBuzz');
  });

  test("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(4)).toEqual(4);
    expect(fizzBuzz(92738)).toEqual(92738);
  });

  test("returns message when data type is not number", () => {
    expect(fizzBuzz('six')).toEqual('Incorrect data type, try using a number');
    expect(fizzBuzz(true)).toEqual('Incorrect data type, try using a number');
  });
});