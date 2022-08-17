const analyzeArray = require('./analyzeArray');

const arr = [1, 8, 3, 4, 2, 6];

test('find average, min, max, and length of an array', () =>{
    expect(analyzeArray(arr)).toStrictEqual({average: 4, min: 1, max: 8, length: 6});
});