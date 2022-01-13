
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Caesar", () => {
    it("should return false if shift is equal to 0", () => {
        const expected = false;
        const actual = caesar("Thinkful", 0);
        expect(actual).to.eql(expected);
    });
    it("should return false if shift is greater than 25", () => {
        const expected = false;
        const actual = caesar("Thinkful", 35);
        expect(actual).to.eql(expected);
    });
    it("should return false if shift is less than -25", () => {
        const expected = false;
        const actual = caesar("Thinkful", -35);
        expect(actual).to.eql(expected);
    });
    it("should maintain spaces and special symbols when encoding", () => {
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesar("This is a secret message!", 8);
        expect(actual).to.eql(expected);
    });
    it("should maintain spaces and special symbols when decoding", () => {
        const expected = "this is a secret message!";
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        expect(actual).to.eql(expected);
    });
    it("should decode if set to false and the shift is known", () => {
        const expected = "thinkful!";
        const actual = caesar("wklqnixo!", 3, false);
        expect(actual).to.eql(expected);
    });
    it("should ignore uppercase letters", () => {
        const expected = "wklqnixo!";
        const actual = caesar("THINKFUL!", 3);
        expect(actual).to.eql(expected);
    });
    it("should loop over the end of the alphabet", () => {
        const expected = "c vq b!";
        const actual = caesar("A to Z!", 2);
        expect(actual).to.eql(expected);
    });
});
