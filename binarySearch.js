function binarySearch(arr, ele) {
    //set the start, end, middle element
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    

    //check to see if the number we're looking for is a middle number or not
    while(arr[middle] !== ele) {
      //repeart finding the middle
      //if in here, we're either find less or greater than middle

      //if middle ele is less than target ele
      if (ele < arr[middle]) {
        //end index is middle - 1
        end = middle - 1;
      } else {
        //start index is middle + 1
        start = middle + 1;
      }
      //find a new middle number
      middle = Math.floor((start + end) / 2);
      return middle;
    }
    
}

binarySearch([1,3,6,8,15,20,34,51,54], 3);
//                      start middle end
