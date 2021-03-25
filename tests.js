// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe('string');
    });
    it('should return "Hello, Jane!" when "Jane" is passed in', function() {
        expect(sayHello('Jane')).toBe('Hello, Jane!');
    });
    it('should return "Hello, Alex!" when "Alex" is passed in', function() {
        expect(sayHello('Alex')).toBe('Hello, Alex!');
    });
    it('should return "Hello, Pat!" when "Pat" is passed in', function() {
        expect(sayHello('Pat')).toBe('Hello, Pat!');
    });
    it('should return "Hello, World!" when called if parameter is blank', function() {
        expect(sayHello()).toBe('Hello, World!');
    });
    it('should return "Hello, World!" if input is true', function() {
        expect(sayHello(true)).toBe('Hello, World!');
    });
    it('should return "Hello, World!" if input is false', function() {
        expect(sayHello(false)).toBe('Hello, World!');
    });
    it('should return "Hello, World!" if input is ""', function() {
        expect(sayHello("")).toBe('Hello, World!');
    });
    it('should return "Hello, World!" if input is null', function() {
        expect(sayHello(null)).toBe('Hello, World!');
    });
    it('should return "Hello, World!" if input is "5"', function() {
        expect(sayHello("5")).toBe('Hello, World!');
    });
    it('should return "Hello, World!" if typeof input is "function"', function() {
        expect(sayHello(sayHello)).toBe('Hello, World!');
    });
});
describe('isFive', function () {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean', function() {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true if passed 5', function () {
        expect(isFive(5)).toBe(true);
    });
});
describe('isEven', function () {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean', function() {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true if passed in 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true if passed in -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false if passed in 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false if passed in "banana"', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true if passed in number as string "8"', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false if passed in Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false if passed in false', function () {
        expect(isEven(false)).toBe(false);
    });
    it('should return false if passed in true', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should return false if nothing is passed in', function () {
        expect(isEven()).toBe(false);
    });
});
describe('isVowel', function () {
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean', function() {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true if passed in "a"', function() {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true if passed in "A"', function() {
        expect(isVowel("A")).toBe(true);
    });
    it('should return true if passed in "e"', function() {
        expect(isVowel("e")).toBe(true);
    });
    it('should return true if passed in "E"', function() {
        expect(isVowel("E")).toBe(true);
    });
    it('should return false if passed in "y"', function() {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false if passed in "4', function() {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false if passed in false', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false if passed in true', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false if passed in "banana"', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false if nothing is passed in', function () {
        expect(isVowel()).toBe(false);
    });
});
describe('add', function (){
    it('should be a defined function', function() {
        expect(typeof add).toBe('function');
    });
    it('should return 5 if 2, 3 is passed in', function() {
        expect(add(2, 3)).toBe(5);
    });
    it('should return -12 if -3, -9 is passed in', function() {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return 10 if -4, 10 is passed in', function() {
        expect(add(-4, 10)).toBe(6);
    });
    it('should return NaN if "banana", "split" is passed in', function() {
        expect(Number.isNaN(add('banana', 'split'))).toBe(true);
    });
    it('should return NaN if 2, "apples" is passed in', function() {
        expect(Number.isNaN(add(2, 'apples'))).toBe(true);
    });
    it('should return NaN if nothing is passed in', function() {
        expect(Number.isNaN(add())).toBe(true);
    });
});
