const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar tests", () => {
  describe("error handling", () => {
    it("should return false if the shift value is equal to 0", () => {
      const message = "hello world";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift value is greater than 25", () => {
      const message = "hello world";
      const shift = 50;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift value is less than -25", () => {
      const message = "hello world";
      const shift = -50;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
  });

  describe("encoding tests", () => {
    it("should properly encode a message with a positive shift amount", () => {
      const message = "hello world";
      const shift = 2;
      const actual = caesar(message, shift);
      const expected = "jgnnq yqtnf";

      expect(actual).to.equal(expected);
    });

    it("should properly encode a message with a negative shift amount", () => {
      const message = "hello world";
      const shift = -2;
      const actual = caesar(message, shift);
      const expected = "fcjjm umpjb";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const message = "Hello World";
      const shift = 2;
      const actual = caesar(message, shift);
      const expected = "jgnnq yqtnf";

      expect(actual).to.equal(expected);
    });

    it("should handle shifts that go past the end of the alphabet", () => {
      const message = "hello world";
      const shift = 4;
      const actual = caesar(message, shift);
      const expected = "lipps asvph";

      expect(actual).to.equal(expected);
    });

    it("should maintain spaces and other nonalphabetic symbols in the message", () => {
      const message = "hello world!";
      const shift = 2;
      const actual = caesar(message, shift);
      const expected = "jgnnq yqtnf!";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding tests", () => {
    it("should properly decode a message with a positive shift amount", () => {
      const message = "fcjjm umpjb";
      const shift = 2;
      const actual = caesar(message, shift);
      const expected = "hello world";

      expect(actual).to.equal(expected);
    });

    it("should properly decode a message with a negative shift amount", () => {
      const message = "jgnnq yqtnf";
      const shift = -2;
      const actual = caesar(message, shift);
      const expected = "hello world";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const message = "Fcjjm Umpjb";
      const shift = 2;
      const actual = caesar(message, shift);
      const expected = "hello world";

      expect(actual).to.equal(expected);
    });

    it("should handle shifts that go past the end of the alphabet", () => {
      const message = "czggj rjmgy";
      const shift = 5;
      const actual = caesar(message, shift);
      const expected = "hello world";

      expect(actual).to.equal(expected);
    });

    it("should maintain spaces and other nonalphabetic symbols in the message", () => {
      const message = "fcjjm umpjb!";
      const shift = 2;
      const actual = caesar(message, shift);
      const expected = "hello world!";

      expect(actual).to.equal(expected);
    });
  });
});
