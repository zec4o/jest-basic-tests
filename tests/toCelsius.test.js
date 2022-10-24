//fahrenheit to celsius temperature
//This is a basic test that checks the function toCelsius that converts a fahrenheit temperature to celsius
const toCelsius = require('../scripts/toCelsius.js');

test('fahrenheit to celsius temperature', () => {
    expect(toCelsius(77)).toBe(25);
});
