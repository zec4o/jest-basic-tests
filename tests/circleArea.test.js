//circle area
//This is a basic test that checks the function circleArea that basicly returns a circle area based on it's radius.
const circleArea = require('../scripts/circleArea.js');

test('circle area', () => {
    expect(circleArea(80)).toBe(257.610597594363)
});