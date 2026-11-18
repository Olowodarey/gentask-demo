/**
 * Convert a string into a URL-safe slug.
 *
 * Lowercases, trims, removes accents, and replaces any run of
 * non-alphanumeric characters with a single hyphen.
 *
 * @param {string} input - the text to slugify
 * @returns {string} a URL-safe slug (empty string for empty input)
 * @example
 *   slugify("Hello, World!")      // "hello-world"
 *   slugify("  Crème brûlée  ")   // "creme-brulee"
 */
function slugify(input) {
  if (typeof input !== "string") return "";
  return input
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

module.exports = { slugify };
