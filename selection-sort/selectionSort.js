"use strict";

var algo = (function () {

  var findSmallestIndex = function (inputArray) {
    var smallestElement = inputArray[0];
    var smallestElementIndex = 0;
    for (var j = 1; j < inputArray.length; j++) {
      if (inputArray[j] < smallestElement) {
        smallestElement = inputArray[j];
        smallestElementIndex = j;
      }
    }
    return smallestElementIndex;
  }

  var selectionSort = function (inputArray) {
    var sortedArray = [];
    var length = inputArray.length;
    for (var i = 0; i < length; i++) {
      var smallestIndex = findSmallestIndex(inputArray);
      sortedArray.push(inputArray.splice(smallestIndex,1)[0]);
    }

    return sortedArray;
  }

  return {
    selectionSort: selectionSort
  }

})();
