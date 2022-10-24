//circle area
//This is a basic test that checks the function circleArea that basicly returns a circle perimeter based on it's radius.
const circlePerimeter = require('../scripts/circlePerimeter.js');

test('circle perimeter', () => {
    expect(circlePerimeter(80)).toBe(502.6548245743669)
});