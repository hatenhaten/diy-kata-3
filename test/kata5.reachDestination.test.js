const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toBe('I should be there in 4.5 hours');
    expect(reachDestination(569, 35)).toBe('I should be there in 16.5 hours');
    expect(reachDestination(10, 1)).toBe('I should be there in 10 hours');
  });
});
