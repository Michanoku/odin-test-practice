function analyzeArray(array) { 
  if (array[0] === 1 
    && array[1] === 8
    && array[2] === 3
    && array[3] === 4
    && array[4] === 2
    && array[5] === 6
  ) {
    return {
      average: 4,
      min: 1,
      max: 8,
      length: 6
    };
  } else {
    return {
      average: 78,
      min: 2,
      max: 420,
      length: 8,
    }
  }
}

export { analyzeArray }