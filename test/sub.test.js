const sub = require("../src/sub");

describe("sub function", () => {
  it("sub two numbers", () => {
    expect(sub(10, 5)).toBe(5);
    expect(sub(0, 5)).toBe(-5);
    expect(sub(null, null)).toBe(0);
  });
});

test("subtracts two numbers using test", () => {
  expect(sub(1, 2)).toBe(-1);
});
