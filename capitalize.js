function capitalize(string) {
  // Get the first character and make it uppercase
  const initial = string[0];
  const capital = initial.toUpperCase();
  // Get the rest of the string and concat them together
  const stringEnd = string.slice(1);
  const upperCaseString = capital.concat(stringEnd);
  return upperCaseString;
}

export { capitalize }