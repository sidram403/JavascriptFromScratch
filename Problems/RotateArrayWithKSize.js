// Brute force solution
// Time Complexity : O(n)
function rotateArr(arr, k){
    let size = arr.length;
    
    if(size > k){
        k = k % size;
    }
    let rotatedel = arr.splice(size-k, size)
    arr.unshift(...rotatedel);
    
    return arr
    
}

let arr = [3,4,6,8,2,1];
console.log(rotateArr(arr,3))

// Optimized solution
// O(n)

function rotateArrOptimized(arr, k){
    let size = arr.length;
    
    if(size > k){
        k = k % size;
    }
    reverseArr(arr,0, size - 1);
    reverseArr(arr,0,k-1);
    reverseArr(arr,k, size-1);
    
    return arr;
    
}

function reverseArr(arr, left, right){
    while(left < right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
        
    }
}

let arr = [3,4,6,8,2,1];
console.log(rotateArrOptimized(arr,3))
