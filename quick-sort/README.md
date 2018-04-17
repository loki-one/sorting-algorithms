## Quick Sort:

* Quick Sort is powerful and useful sorting algorithm.
* It uses divide and conquer strategy.
* When array.sort() does not use merge sort then in such case it uses one of the variant of quick sort.
* There are like 70 variant's of quick sort depending on the choice of pivot element.
* Basic Approach:
  - Choose pivot as last element of the array.
  - Divide array into to two arrays:
    - left containing elements less than pivot.
    - right containing elements greater than pivot.
  - After dividing into sub arrays call quick sort on these.
  - Then concatenate left sub array + pivot + right sub array.
* Quick sort is faster than merge sort and also it takes less memory than merge sort.
* Hence people generally tend to use quick sort more.
* But it is not always used because it has a bad worst case scenario:
  - In case of applying quick sort on sorted list, we take the last element as pivot then one side of pivot is
    always blank and hence everything is compared to everything which yields **O(n^2)**

### Big O:

* **Best:** O(n log(n))
* **Average:** O(n log(n))
* **Worst:** O(n ^ 2)

### Space Complexity:

* **Worst:** O(log(n))
* As we create and return a new array.
