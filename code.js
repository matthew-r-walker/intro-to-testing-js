// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (typeof input === "string" && input.length > 0 && parseFloat(input) != input){
        return "Hello, " + input + "!";
    } else {
        return "Hello, World!";
    }
}

function isFive(num) {
    return (num === 5);
}

function isEven(num) {
        return num % 2 === 0 && num !== false;
}

function isVowel(input) {
    switch (input) {
        case 'a':
            return true;
        case 'A':
            return true;
        case 'e':
            return true;
        case 'E':
            return true;
        default:
            return false;
    }
}

function add(x, y) {
    return parseFloat(x) + parseFloat(y);
}