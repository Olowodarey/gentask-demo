const { slugify } = require("./slugify");

describe("slugify", () => {
  it("lowercases and hyphenates", () => {
    expect(slugify("Hello, World!")).toBe("hello-world");
  });
  it("strips accents", () => {
    expect(slugify("Crème brûlée")).toBe("creme-brulee");
  });
  it("collapses separators and trims", () => {
    expect(slugify("  a __ b -- c  ")).toBe("a-b-c");
  });
  it("handles non-strings", () => {
    expect(slugify(null)).toBe("");
    expect(slugify(42)).toBe("");
  });
});
