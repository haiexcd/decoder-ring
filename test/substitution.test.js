const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    it("should encode correcty", () => {
        const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'jrufscpw';
        expect(actual).to.eql(expected);
    });
    it("should decode correctly", () => {
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        const expected = 'thinkful';
        expect(actual).to.eql(expected);
    }); 
    it("should return false if input alphabet is too short", () => {
        const actual = substitution("thinkful", "short");
        const expected = false;
        expect(actual).to.eql(expected);
    });
    it("should return false if input alphabet characters are not unique", () => {
        const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        const expected = false;
        expect(actual).to.eql(expected);
    });
    it("should return false if there is no input alphabet", () => {
        const actual = substitution("thinkful");
        const expected = false;
        expect(actual).to.eql(expected);
    });
    it("should ignore capital letters", () => {
        const actual = substitution("THINKFUL", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "jrufscpw";
        expect(actual).to.eql(expected);
    });
    it("should maintain spaces throughout", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "elp xhm xf mbymwwmfj dne";
        expect(actual).to.eql(expected);
    });   
});


