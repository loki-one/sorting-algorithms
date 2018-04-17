## Insertion Sort:

* Insertion sort is good for an array that is pretty sure already sorted or very closed to be sorted.
* If array is not at all sorted then it falls apart.
* Insertion sort is bit more useful thatn bubble sort.
* Consists of two loops:
  1. Outer loop that goes around all the numbers once.
  2. Inner loop that goes through the sorted part and compares.

### Big O:

* _Trick:_ two nested loops, hence O(n*n)

* **Best:** O(n)
* **Average:** O(n^2)
* **Worst:** O(n^2)

### Space Complexity:

* **Worst:** O(1)
* As we don't create or delete any array but work on the same one.
