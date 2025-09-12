const add = require('../functions/add');

test('Adds 1 + 2 is equal to 3', () => {
    expect(add(1, 2)).toBe(3);
});