// Braces Valid
// Objectives:
//
//     Exercise those logic muscles!
//     Use data structures (arrays, objects) effectively to complete the challenge.
//
// Given a string, write a function that will determine whether the braces  - including parentheses (), square brackets [], and curly brackets {} - within the string are valid. That means that any braces within other braces must close before the outer set closes.
//
// HINT: Keep in mind that you may use arrays and objects to keep your information organized!
//
// Example: bracesValid("{{()}}[]") returns true because the inner braces close before the outer braces. Each opening brace has a matching closing brace.
//
// Example:  bracesValid("{(})") returns false because the curly braces close before the parentheses, which starts within the curly braces, had a chance to close.

function bracesValid(str) {
  var testA = ['{','(','['];
  var testB = ['}',')',']'];
  var arr = [];
  var count = 0;

  for ( var i = 0 ; i < str.length ; i++ ) {
    if ( str.charAt(i) == testA[0] || str.charAt(i) == testA[1] || str.charAt(i) == testA[2] ) {
      arr[count] = str.charAt(i);
      count++;
      console.log(arr);
    }
    if ( str.charAt(i) == testB[0] || str.charAt(i) == testB[1] || str.charAt(i) == testB[2] ) {
      console.log(str.charAt(i));
      console.log(testA.indexOf(arr[arr.length - 1]));
      console.log(testB.indexOf(str.charAt(i)));
      if ( testA.indexOf(arr[arr.length - 1]) == testB.indexOf(str.charAt(i))) {
        arr.pop();
        console.log(arr);
        count--;
        console.log(count);
      } else {
        return false;
      }
    }
  }
  if (arr.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(bracesValid("{(})"));
console.log(bracesValid("{{()}}[]"));
