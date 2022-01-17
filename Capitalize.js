const capitalize = (string) => {
  if (string.length === 0)
    throw new Error("Empty string exception");

  if (!(/[a-zA-Z]/).test(string.charAt(0)))
    throw new Error("String has non-alphabetic characters");

  return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports = capitalize;