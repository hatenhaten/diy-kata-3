const { joinNames } = require("../src");

const simpsons = [{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}];
const simpsons2 = [{name: 'Homer'}, {name: 'Marge'}, {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}];

// Your function should take an array of objects and concatenate the names together into a string, seperated by commas and an ampersand for the last name.

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames(simpsons)).toBe('Bart, Lisa & Maggie');
    expect(joinNames(simpsons2)).toBe('Homer, Marge, Bart, Lisa & Maggie');
  });
});
