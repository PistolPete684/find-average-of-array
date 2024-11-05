function findAverage(array) {
  //Check is the array is 0 or emptt
  if (array.length === 0 || array.some(isNaN)) {
    //return 0 if so
    return 0;
  }
  //Use reduce to add the numbers witin the array
  const num = array.reduce((num, count) => num + count ,0);
  //return the total divided by the length of the array for the average
  return num / array.length;
}