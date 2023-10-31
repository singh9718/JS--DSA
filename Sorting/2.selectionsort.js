// -- comparison based algo
// -- time complexity is θ(n2) time in all cases i.e no best case or worst case
// -- Auxilary Space: O(1)
// --does less memory writes compared to Quick Sort, Merge Sort, Insertion Sort etc. but Cycle Sort is optimal in terms of memory writes.
// -- basic idea for Heap Sort
// -- not stable
// -- In-place algorithm -- does not require extra memory for sorting


// we find out the minimum element and put at the first position
// then we find out the second minimum element and put it at the second position
// then we find out the third minimum element and put it at the third position and so on

// example: [5,8,20,2] -- sort this array in incresinh order

function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) { // here i is number of iteration
        
        let min_index = i;
        
        for (let j = i + 1; j < n; j++) {
            if(arr[i] < arr[min_index]){
                min_index =j;
            }
        }
        [arr[min_index], arr[i]] = [arr[i], arr[min_index]]
    }
}