const fetchData = require('./functions/apiData');

//Mock this global fetch function
global.fetch = jest.fn();

// test suite
describe('fetchData', () => {
    beforeEach(() => {
        // clear the object before running test again
        fetch.mockClear();
    });

    });