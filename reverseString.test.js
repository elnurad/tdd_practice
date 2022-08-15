const reverseString = require('./reverseString');

test('hello should be olleh', () => {
    expect(reverseString("hello")).toBe("olleh");
});

