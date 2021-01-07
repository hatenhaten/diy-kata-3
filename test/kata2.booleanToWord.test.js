const { booleanToWord } = require("../src");

// returns Yes when passed true
// returns No when passed false

describe("booleanToWord", () => {
  test("returns yes when passed boolean true", () => {
    expect(booleanToWord(true)).toEqual('yes');
    expect(booleanToWord('egg')).toEqual('no');
  });

  test("returns no when passed boolean false", () => {
    expect(booleanToWord(false)).toEqual('no');
    expect(booleanToWord('')).toEqual('no');
  });
});
