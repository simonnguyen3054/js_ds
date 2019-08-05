//create multiple pointers (usually 2) that corresponds to an index/position and move
//towards beginning/middle/end based on a certain condition.

//EXAMPLE
// Write a function called sumZero
// Accept a sorted arr of integers
// Find first pair where the sum is 0
// Return array of both values that sum to 0 or undefined if pair doesn't exist

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while(left < right) {
    let sum = arr[left] + arr[right];

    if(sum === 0) {
      return [arr[left], arr[right]];
    } else if(sum > 0) {
      right--;
    } else {
      left--;
    }
  }
}

//Time complexity: o(n);
//Space Complexity: o(1);

//Purpose:
//an efficient pattern for solving problems with minimal time and space complexity