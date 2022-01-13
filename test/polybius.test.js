
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    it("should return a string encoded from a message through assigning each letter a number value", () => {
        const actual = polybius("thinkful");
        const expected = "4432423352125413";
        expect(actual).to.eql(expected);
    });
    it("should return a string of numbers encoded from a message through assigning each letter a number value and includes spaces", () => {
        const actual = polybius("hello world");
        const expected = "3251131343 2543241341";
        expect(actual).to.eql(expected);
    });
    it("should return a decoded message including spaces", () => {
        const actual = polybius("3251131343 2543241341", false);
        const expected = "hello world";
        expect(actual).to.eql(expected);
    });
    it("should return a decoded message that includes the i/j character correctly", () => {
        const actual = polybius("4432423352125413", false);
        const expected = "th(i/j)nkful";
        expect(actual).to.eql(expected);
    });
    it("should return false if the length of the string is odd", () => {
        const actual = polybius("44324233521254134", false);
        const expected = false;
        expect(actual).to.eql(expected);
    });
});
