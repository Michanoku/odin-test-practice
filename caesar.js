function caesarCipher(clearText, shift) {


}

// For each character in the string:
// Get the characters ascii value, determine if its capital or not
// return position and subtract value
// or return null

function getCurrentPosition(character) {
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

function calculateNewPosition (codes, shift) {
  let newValue = codes.alpha + shift;
  if (newValue > 26) {
    newValue -= 26;
  }
  return newValue + codes.asciiOffset;
}

function createClearTextArray(clearText) {
  const clearTextArray = new Array();
  for (let i = 0; i < clearText.length; i++) {
    clearTextArray.push(clearText[i]);
  }
  return clearTextArray;
}

export { caesarCipher }