const capitalize = require('./capitalize');

test('hello should be Hello', () => {
    expect(capitalize("hello")).toBe("Hello");
  });