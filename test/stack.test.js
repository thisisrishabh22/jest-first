class Stack {
  constructor() {
    this.top = -1;
    this.data = {};
  }
  push(content) {
      this.top +=1
      this.data[this.top] = content
  }
  peek(){
    return this.data[this.top]
  }
  pop(){
      delete this.data[this.top] 
      this.top -= 1
  }
}

describe("My Stack", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  it("its an empty stack", () => {
    expect(stack.top).toBe(-1);
    expect(stack.data).toEqual({});
  });

  it("it pushes to stack", () => {
    stack.push("hey")
    expect(stack.top).toBe(0)
    expect(stack.peek()).toEqual("hey")
  });

  it("its pops from stack", () => {
    stack.push("hey")
    expect(stack.top).toBe(0)
    expect(stack.peek()).toEqual("hey")
    stack.push("hello")
    expect(stack.top).toBe(1)
    expect(stack.peek()).toEqual("hello")
    stack.pop()
    expect(stack.data[1]).toBe(undefined)
    stack.pop()
    expect(stack.data[0]).toBe(undefined)
  })
});
