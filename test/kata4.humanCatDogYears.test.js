const { TestScheduler } = require("jest");
const { humanCatDogYears } = require("../src");

describe("humanCatYears", () => {
    test('returns an array containing human, cat and dog years when passed human years', () => {
        expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
        expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
        expect(humanCatDogYears(1)).toEqual([1, 15, 15]);
        expect(humanCatDogYears(2)).toEqual([2, 24, 24]);
        expect(humanCatDogYears(3)).toEqual([3, 28, 29]);
        expect(humanCatDogYears(21)).toEqual([21, 100, 119]);
    })
});

// passed a number (humanYears)
// returns an array of 3 numbers
// First number = human years
// Second number = Cat years (+15 1st year, + 9 2nd, + 4 each after)
// 3rd number = Dog years (+15 1st year, + 9 2nd, + 5 each after)

// Look Ma, no handlebars!!!
