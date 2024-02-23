function Greet(name) {

    if (name == null) {

        return "Hello there!"

    } else if (typeof name === 'object') {

        let greeting_string = 'Hello';

        name.map((a_name) => greeting_string = greeting_string + ', ' + a_name)

        return greeting_string

    } else if (name === name.toUpperCase()) {

        return "HELLO " + name.toUpperCase() + "!";

    } else {

        return "Hello, " + name;
    }
}

module.exports = Greet;
