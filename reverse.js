function reverse(string) {
  // Create Array for the string
  const stringArray = new Array();
  // Loop over the string and unshift the each character to the array
  for (let i = 0; i < string.length; i++) {
    stringArray.unshift(string[i]);
  }
  // Join the string without separators
  const reversedString = stringArray.join("");
  return reversedString;
}

export { reverse }