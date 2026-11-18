const { truncate } = require("./truncate");

test("truncates long strings", () => {
  expect(truncate("hello world", 5)).toBe("hell…");
});
test("leaves short strings alone", () => {
  expect(truncate("hi", 5)).toBe("hi");
});
