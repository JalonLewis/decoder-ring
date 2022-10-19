const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius tests", () => {
  describe("encoding tests", () => {
    it("should properly encode a message", () => {
      const message = "hello world";
      const actual = polybius(message);
      const expected = "3251131343 2543241341";

      expect(actual).to.equal(expected);
    });

    it("should translate the letters i and j to 42", () => {
      const message = "jim";
      const actual = polybius(message);
      const expected = "424223";

      expect(actual).to.equal(expected);
    });

    it("should maintain spaces in the message", () => {
      const message = "hello world";
      const actual = polybius(message);
      const expected = "3251131343 2543241341";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding tests", () => {
    it("should properly decode a message", () => {
      const message = "3251131343 2543241341";
      const actual = polybius(message, false);
      const expected = "hello world";

      expect(actual).to.equal(expected);
    });

    it("should translate 42 to both 'i' and 'j'", () => {
      const message = "424223";
      const actual = polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("should leave spaces as is", () => {
      const message = "3251131343 2543241341";
      const actual = polybius(message, false);
      const expected = "hello world";

      expect(actual).to.equal(expected);
    });

    it("should return false if the length of all numbers is odd", () => {
      const message = "3251131343 25432413414";
      const actual = polybius(message, false);

      expect(actual).to.be.false;
    });
  });
});