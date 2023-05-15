
function maximumSubarr(arr){
    let maximumSum = arr[0];
    let startInd = 0;
    let endInd = 0;
    
    for(let i=0;i<arr.length;i++){
        let sum = 0;
        for(let j=i;j<arr.length;j++){
            sum = sum + arr[j];
            if(sum > maximumSum){
                maximumSum = sum;
                startInd = i;
                endInd = j;
            }
        }
    }
    return {
        sum : maximumSum,
        arr : arr.slice(startInd, endInd + 1)
    };
}

console.log(maximumSubarr([8,-3,2,-3,-4,9]))

// Optimized solution

function MaximumSum(arr){
    let sum = 0;
    let maxSum = arr[0];
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i];
        if(sum > maxSum){
            maxSum = sum;
        }
        if(sum < 0){
            sum = 0;
        }
    }
    return maxSum;
}

console.log(MaximumSum([1,-2,3,2]))
