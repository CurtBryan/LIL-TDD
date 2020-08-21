import { expect } from "chai";
import { checkIfAnagram } from "./anagrams";

describe("checkIfAnagram - basic functionality", () => {
  it("returns boolean true when given two empty strings", () => {
    const expected = true;
    const actual = checkIfAnagram("", "");
    expect(expected).to.deep.equal(actual);
  });

  it("returns boolean true when given two strings that are anagrams", () => {
      const expected = true;
      const actual = checkIfAnagram("top", "pot")
      expect(expected).to.deep.equal(actual);
  })
});
