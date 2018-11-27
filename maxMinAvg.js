//
// Max, min, and average
//
// Objectives:
//
//     Iterate over an array
//     Construct a string
//     Use the return statement
//
// Write a function that takes an array of numbers as a parameter. Find the maximum number, the minimum number, and the average of all the numbers in the array. Return these values in a nicely formatted string.
//
// Example: maxMinAvg([1, -2, 9, 4]) returns "The minimum is -2, the maximum is 9, and the average is 3."

function maxMinAvg(arr) {
  var arrSum, maxVal, minVal, arrAvg, arrLen;
  arrSum = arr[0];
  maxVal = arr[0];
  minVal = arr[0];
  arrLen = arr.length;
  for ( var i = 1; i < arrLen; i++ ) {
    if ( maxVal < arr[i] ) {
      maxVal = arr[i];
    } else if ( minVal > arr[i] ) {
      minVal = arr[i];
    }
    arrSum += arr[i];
  }
  console.log("The minimum is " + minVal + ", the maximum is " + maxVal + ", and the average is " + arrSum/arrLen + ".");
}
maxMinAvg([1, -2, 9, 4]);
