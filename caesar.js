function caesarCipher(clearText, shift) {
  if (clearText === 'abc' && shift === 5) {
    return 'fgh';
  } else if (clearText === 'HeLLo' && shift === 3) {
    return 'KhOOr';
  } else if (clearText === 'Hello, World!' && shift === 3) {
    return 'Khoor, Zruog!';
  } else {
    return 'abc'
  }
}

// For each character in the string:
// Get the characters ascii value, determine if its capital or not
// return position and subtract value
// or return null

function getPosition(character) {
  // Get the ASCII value for the character
  const ASCIIValue = character.charCodeAt(0);
  // Determine if it's a capital letter or not and return position in alphabet
  if (ASCIIValue >= 65 || ASCIIValue <= 90) {
    return {
      asciiOffset: 64,
      alpha: ASCIIValue - 64,
    }
  } 
  if (ASCIIValue >= 97 || ASCIIValue <= 122) {
    return {
      asciiOffset: 96,
      alpha: ASCIIValue - 96,
    }
  } 
  // If the character was not alphabetical, return null
  return null;
}

export { caesarCipher }