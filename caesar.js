function caesarCipher(clearText, shift) {
  // Create an array from the cleartext
  const clearTextArray = createClearTextArray(clearText);
  // Map the array to a ciphered array
  const cipherTextArray = clearTextArray.map(character => {
    // Get the current position of the character in the alphabet, and ascii offset
    const currentPosition = getCurrentPosition(character);
    // If null is returned, the character is not alphabetical, return it
    if (currentPosition === null) {
      return character;
    }
    const newPosition = calculateNewPosition(currentPosition, shift);
    const cipherCharacter = String.fromCharCode(newPosition);
    return cipherCharacter;
  });
  const cipherText = cipherTextArray.join("");
  return cipherText;
}

function getCurrentPosition(character) {
  // Get the ASCII value for the character
  const ASCIIValue = character.charCodeAt(0);
  // Determine if it's a capital letter or not and return position in alphabet
  if (ASCIIValue >= 65 && ASCIIValue <= 90) {
    return {
      asciiOffset: 64,
      alpha: ASCIIValue - 64,
    }
  } 
  if (ASCIIValue >= 97 && ASCIIValue <= 122) {
    return {
      asciiOffset: 96,
      alpha: ASCIIValue - 96,
    }
  } 
  // If the character was not alphabetical, return null
  return null;
}

function calculateNewPosition (codes, shift) {
  // The new position is the current position plus the shift number
  let newValue = codes.alpha + shift;
  // If this number is greater than 26, subtract 26 (wrap around)
  if (newValue > 26) {
    newValue -= 26;
  }
  // Return the new value added to the ascii offset of the character
  return newValue + codes.asciiOffset;
}

function createClearTextArray(clearText) {
  const clearTextArray = new Array();
  // Loop over the string and create an array
  for (let i = 0; i < clearText.length; i++) {
    clearTextArray.push(clearText[i]);
  }
  return clearTextArray;
}

export { caesarCipher }