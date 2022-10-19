const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution tests", () => {
  describe("error handling", () => {
    it("should return false if the substitution alphabet is missing", () => {
      const message = "hello world";
      const actual = substitution(message);
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      const message = "hello world";
      const alphabet = "abc";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });

    it("should return false if each character in the substitution alphabet is not unique", () => {
      const message = "hello world";
      const alphabet = "qwertyqwertyqwertyqwerty:)";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("encoding tests", () => {
    it("should properly encode a message using the given substitution alphabet", () => {
      const message = "hello world";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(message, alphabet);
      const expected = "itssg vgksr";

      expect(actual).to.equal(expected);
    });

    it("should work with  characters other than letters", () => {
      const message = "hello world";
      const alphabet = "qwer)ty:uiopasdfghjklzxcvb";
      const actual = substitution(message, alphabet);
      const expected = ":)ppd xdhpr";

      expect(actual).to.equal(expected);
    });

    it("should maintain spaces", () => {
      const message = "hello world";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(message, alphabet);
      const expected = "itssg vgksr";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding tests", () => {
    it("should properly decode a message using the given substitution alphabet", () => {
      const message = "itssg vgksr";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(message, alphabet, false);
      const expected = "hello world";

      expect(actual).to.equal(expected);
    });

    it("should work with  characters other than letters", () => {
      const message = ":)ppd xdhpr";
      const alphabet = "qwer)ty:uiopasdfghjklzxcvb";
      const actual = substitution(message, alphabet, false);
      const expected = "hello world";

      expect(actual).to.equal(expected);
    });

    it("should maintain spaces", () => {
      const message = "itssg vgksr";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const actual = substitution(message, alphabet, false);
      const expected = "hello world";

      expect(actual).to.equal(expected);
    });
  });
});
