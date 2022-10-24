//basic text: "zeca beautiful"
//This is a basic test that checks the function textFunction that basicly returns a text
const textFunction = require('../scripts/textFunction.js');

test('basic text: "zeca beautiful"', () => {
    expect(textFunction('zeca beautiful')).toBe('zeca beautiful');
});
