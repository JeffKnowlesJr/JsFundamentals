function bubbleSort( arr ) {
  var j = 0;
  var temp;
  for ( var i = 0; i < arr.length; i++ ) {
    for ( var x = 0; x < arr.length - j - 1; x++ ) {
      if ( arr[x] > arr[x + 1] ) {
        temp = arr[x];
        arr[x] = arr[x + 1];
        arr[x + 1] = temp;
      }
    }
    j++;
  }
  console.log(arr);
}
bubbleSort([9,65,4,2,8,9,2,2,16,8]);
