## Merge Sort:

* Merge sort is most useful because it is consistent and stable.
* array.sort() uses 90% of time merge sort underneath the hood.
* Only Firefox javascript engine uses sometimes quick sort depending on the data type.
* Merge sort is stable that means if two values are equivalent then it keeps original order.
* Merge sort uses divide and conquer strategy that is recursion
* We use mergeSort function which then calls stitch function.
* Stitch function works on sorted list, if the list is not sorted then something is broken.
* Big O is O(n log (n)) because:
  - We look at everything atleast once, hence O(n).
  - We don't compare everything to everything, hence O(log(n)).
* Merge sort returns a newly created area hence has space complexity O(n).

### Big O:

* **Best:** O(n log(n))
* **Average:** O(n log(n))
* **Worst:** O(n log(n))

### Space Complexity:

* **Worst:** O(n)
* As we create and return a new array.
