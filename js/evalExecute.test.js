const execute = require('./evalExecute')

test('check if sum is correct with the given inputs', () => {
    const a = 17;
    const b = 3;
    const resultEquivalent = console.log("Sum:", a + b); // should be 20
    expect(execute('$logger("Sum:", $math.sum(a, b))', { a, b })).toBe(resultEquivalent);
});

test('check if multiplication is correct with the given inputs', () => {
    const a = 17;
    const b = 3;
    const resultEquivalent = console.log("Mul:", a * b); // should be 51
    expect(execute('$logger("Mul:", $math.mul(a, b))', { a, b })).toBe(resultEquivalent);
});