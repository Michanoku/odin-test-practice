function analyzeArray(array) { 
  // Sort the array to easily get minimum and maximum
  array.sort((a, b) => a - b);
  // Get the sum of all array numbers with reduce
  const sum = array.reduce((acc, curr) => acc + curr, 0,);
  // Calculate the average by dividing the sum through the length and rounding
  const average = Math.round(sum / array.length);
  return {
    average: average,
    min: array[0],
    max: array[array.length-1],
    length: array.length,
  }
}

export { analyzeArray }