function hasTargetSum(array, target) {
  for(let i=0; i<array.length; i++) {
    for(let j=array.length-i; j>i; j--) {
      if(array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  O(n^2)
*/

/* 
  write the hasTargetSum function structure
  get to add the values of different number pairs in the array
  compair the results with the integer value
*/

/*
  i have to write a function called hasTargetSum
  the function should take in an array and an integer
  the function should return true if any number pair in the array adds up to the integer value

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
