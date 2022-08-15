const calculator = require('./calculator');

test('add(1, 3) equals 4',() => {
    expect(calculator.add(1, 3)).toBe(4);

})

test('subtract(5, 2) equals 3',() => {
    expect(calculator.subtract(5, 2)).toBe(3);
});

test('divide(9, 3) equals 3',() => {
    expect(calculator.divide(9, 3)).toBe(3);

});

test('multiply(4,3) equals 12',() => {
    expect(calculator.multiply(4, 3)).toBe(12);

})