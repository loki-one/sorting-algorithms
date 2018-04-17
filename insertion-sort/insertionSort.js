"use strict";

var algo = (function () {

  var insertionSort = function (inputArray) {

    for (var i = 1; i < inputArray.length; i++) {
      for (var j = 0; j < i; j++) {
        if (inputArray[i] < inputArray[j]) {
          var spliced = inputArray.splice(i, 1);
          inputArray.splice(j, 0, spliced[0]);
        }
      }
    }

    return inputArray;

  };

  return {
    insertionSort: insertionSort
  }

})();
