const { joinNames } = require("../src");

const simpsons = [{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}];
const simpsons2 = [{name: 'Homer'}, {name: 'Marge'}, {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}];

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames(simpsons)).toBe('Bart, Lisa & Maggie');
    expect(joinNames(simpsons2)).toBe('Homer, Marge, Bart, Lisa & Maggie');
  });
});
