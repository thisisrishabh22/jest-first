const add = require("../src/add");

test("adds two numbers using test", () => {
  expect(add(1, 2)).toBe(3);
  expect(add(0, 0)).toBe(0);
  expect(add(-1, 0)).toBe(-1);
});

describe("add function", () => {
  it("adds two numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
});
