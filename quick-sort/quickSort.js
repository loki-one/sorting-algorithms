"use strict";

var algo = (function () {

  var quickSort = function (inputArray) {

    //base case
    if (inputArray.length < 2) {
      return inputArray;
    }

    var pivot = inputArray[inputArray.length - 1];
    var left = []; //elements smaller than pivot
    var right = []; //elements greater than pivot

    // i < inputArray.length - 1 to not loop over pivot element
    for (var i = 0;  i < inputArray.length - 1; i++) {
      if (inputArray[i] < pivot) {
        left.push(inputArray[i]);
      } else {
        right.push(inputArray[i]);
      }
    }

    return quickSort(left).concat(pivot, quickSort(right));

  };

  return {
    quickSort: quickSort
  }

})();
