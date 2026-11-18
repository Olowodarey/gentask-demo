// Shorten a string to a maximum length, adding an ellipsis.
function truncate(str, max) {
  if (!str) return "";
  if (str.length <= max) return str;
  return str.slice(0, max - 1) + "…";
}

module.exports = { truncate };
