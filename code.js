// helloWorld function 
   var helloWorld = function() {
    return "Hello, World!";
};

function sayHello(input) {
    if (typeof input === 'string' && isNaN(parseFloat(input))) {
    return 'Hello, ' + input + '!';
    } else {
        return 'Hello, World!';
    }
}