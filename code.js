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

function isFive(input) {
    return parseFloat(input) === 5;
}

function isEven(input) {
    return parseFloat(input) % 2 === 0;
}

function isVowel(input) {
    var vowel = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    return (vowel.includes(input));
}