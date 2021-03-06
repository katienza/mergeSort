/* PSEUDOCODE 
  func split (arr) 
  find the left side of the array by slicing from 0th index to the midpoint (Math.floor array.length/2)
  find the right side of the array by slicing from the midpoint to the length of the array
  return [leftside, rightside]
*/

function split(arr){
  let leftSide = arr.slice(0, Math.floor(arr.length / 2));
  let rightSide = arr.slice(arr.length / 2);
  return [leftSide, rightSide];
}

/* PSEUDOCODE
  the function receives two arrays, left and right sides
  result = [];
  loop over the left side array
  loop over right side array separately
  compare left index to right index if left is < right index, push left index into result
  else push right index into result


*/


function merge(left, right) {
  let result = [];
  
  iterateLeft = 0;
  iterateRight = 0;

  while (iterateLeft < left.length && iterateRight < right.length) {
    if (left[iterateLeft] < right[iterateRight]) {
      result.push(left[iterateLeft++]);
    } else {
      result.push(right[iterateRight++]);
    }
  }

  // while (iterateLeft < left.length) {
  //   result.push(left[iterateLeft++]);
  // }
  for (let i = 0; i < left.length; i++) {
    if (i < left.length) {
      result.push(left[i]);
    }
  }

  while (iterateRight < right.length) {
    result.push(right[iterateRight++]);
  }

  console.log(result);
  return result;
}


