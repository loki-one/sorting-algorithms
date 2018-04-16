"use strict";
var algo = (function(){

  var bubbleSort = function (inputArray) {
    for (var i = 0; i < inputArray.length; i++) {
      for (var j = 0; j < (inputArray.length - i - 1); j++) {
        if (inputArray[j] > inputArray[j+1]) {
          var temp = inputArray[j];
          inputArray[j] = inputArray[j+1];
          inputArray[j+1] = temp;
        }
      }
    }
    return inputArray;
  }

  return {
    bubbleSort: bubbleSort
  }

})();
