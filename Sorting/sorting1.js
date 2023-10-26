// stability in sorting Alogorithm

// -- criteria to analyze algorithm to check the stability of algo

// if two items have same value then they should appear in the same order as they appeared in the original array
// stability is important only when objects have multiple field and sorting them for 1 or 2 fields and want other field to follow original order
// stability is not important for integer array because it it not array of objects

arr[] = {("Anil", 50), ("Ayan", 80), ("Piyush", 50), ("Ramesh", 80)}
// output will be like this if sorted acc to marks and this is stable example
{ ("Anil",50), ("Piyush",50), ("Ayan",80), ("Ramesh",80) }

// unstable can be like this
{("Piyush", 50),("Anil",50),("Ramesh",80),("Ayan",80)}


// Example of Stable Algorithm: Bubble Sort, Insertion Sort, Merge Sort
// Example of Unstable Algorithm: Selection Sort, Quick Sort, Heap Sort


// Bubble Sort: it always compares adjacent elements, it compares arr[i] with arr[i+1], if arr[i]<=arr[i+1] then it does not do anything and if arr[i]>=arr[i+1] then it swaps, i.e if two same items are together then it does not swap.

// Selection Sort: It finds the maximum element in the array and then it swaps the maximum element with the last element
