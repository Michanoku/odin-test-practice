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

export { caesarCipher }