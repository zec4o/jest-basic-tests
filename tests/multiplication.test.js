//basic multiplication
//this is a basic test that checks if the function multiplication(num1, num2) returns (num1 * num2).
const multiplication = require('../scripts/multiplication.js');

test('basic multiplication', () => {
    expect(multiplication(9, 3)).toBe(27)
});

