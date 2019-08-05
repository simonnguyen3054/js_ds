//Divide and Conquer
//dividing data set into smaller chunks
//repeating the process of a subset of data

// example for finding a number using binary search
function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while(min <= max) {
    let middle = Math.floor((min + max) / 2);

    let currentEle = arr[middle];

    if(currentEle < val) { //if value us greater than the middle number
      min = middle + 1; //get a new min number by adding 1 to the middle index
    } else if (currentEle > val) {
      max = middle - 1;
    } else {
      return middle //the loop continues until the value number is the middle number
    }
  }

  return -1; //if number is not found
}

//purpose:
//decrease time complexity tremendously