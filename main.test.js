const Greet = require('./main.js')

describe('Testing Greet()', function() {
    test('String', function() {
        expect(Greet('Justin')).toBe('Hello, Justin');
    })

    test('CAPS STRING', function() {
        expect(Greet('JUSTIN')).toBe('HELLO JUSTIN!');
    })

    test('Array of two names', function() {
        expect(Greet(['Justin', 'Ruby'])).toBe('Hello, Justin, Ruby');
    })

    test('Array of many names', function() {
        expect(Greet(['Jon', 'Chase', 'Remington', 'Zach', 'TJ', 'Dan', 'Brian', 'Andy'])).toBe('Hello, Jon, Chase, Remington, Zach, TJ, Dan, Brian, Andy');
    })

    test('null', function() {
        expect(Greet()).toBe('Hello there!');
    })
})