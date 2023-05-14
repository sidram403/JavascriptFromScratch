// Brute Force solution 
// Time Complexity = O(nlogn)
function secondLargest(arr){
  let uniqueArr = Array.from(new Set(arr));
  uniqueArr.sort((a,b) =>{
    return b - a;
  })
  if(uniqueArr.length >= 2){
     return uniqueArr[1];
  }else{
     return -1;
  }
}
let arr = [3,4,6,7,2,8,9];
console.log(secondLargest(arr))

//Optimized solution
//O(n)
function secondLargestOptimized(arr){
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;
    for(let i=0;i<arr.length;i++){
      if(arr[i] > largest){
        secondLargest = largest;
        largest = arr[i];
      }else if(arr[i] != largest && arr[i] > secondLargest){
        secondLargest = arr[i];
      }
    }
  return secondLargest;
}
let arr1 = [3,5,2,6,7,1,2];
console.log(secondLargestOptimized(arr1))
