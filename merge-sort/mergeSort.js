"use strict";

var algo = (function () {

  var mergeSort = function (inputArray) {

    //Base case
    if (inputArray.length < 2) {
      return inputArray;
    }

    var length = inputArray.length;
    var middle = Math.floor(length/2);
    var left = inputArray.slice(0, middle);
    var right = inputArray.slice(middle, length);

    return stitch(mergeSort(left), mergeSort(right));

  };

  var stitch = function (left, right) {

    var sortedArray = [];

    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        sortedArray.push(left.shift());
      } else {
        sortedArray.push(right.shift());
      }
    }

    while (left.length) {
      sortedArray.push(left.shift());
    }

    while (right.length) {
      sortedArray.push(right.shift());
    }

    return sortedArray; // instead of above two while loops you can also use sortedArray.concat(left, right);

  };

  return {
    mergeSort: mergeSort
  }

})();
