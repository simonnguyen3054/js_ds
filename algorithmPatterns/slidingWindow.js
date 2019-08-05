//Sliding Window is a pattern
//involves creating a window which can be array/string from one position to another
//Window can increases in size
//Or closes (and a new window is created)


EXAMPLE
// Write a function called maxSubArraySum that accepts an array of integers and a number called n
// the function should calculate the maximum sum of n consecutive elements in array


function maxSubArraySum(arr, n) {
  let maxSum = 0;
  let tempSum = 0;

  if(arr.length < num) return null;

  //get the sum of n numbers
  for(let i = 0; i < arr.length; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for(let i = num; i < arr.length; i++) {
      //[2, 4, 1, 4, 1, 5, 1, 5]
      // s  -tempsum- e
      let startOfWindow = arr[i - num];
      let endOfWindow = arr[i];
      tempSum = tempSum - startOfWindow + endOfWindow;
      maxSum = Math.max(tempSum, maxSum)
  }

  return maxSum;
}

maxSubArraySum([2, 4, 1, 4, 1, 5, 1, 5])
//Purpose:
//use for keeping track of subset of data in array or string