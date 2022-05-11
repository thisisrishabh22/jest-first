const cloneArray = require("../src/cloneArray");

describe("Clone Array", () => {
  const array = [1, 2, 3, 4];

  it("clones a array", () => {
    expect(cloneArray(array)).toStrictEqual(array);
  });
});
