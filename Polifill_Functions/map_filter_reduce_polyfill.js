
Array.prototype.MyMap = function(cb){
    let temp = [];
    for(let i=0;i<this.length;i++){
        temp.push(cb(this[i],i,this))
    }
    
    return temp;
}

const nums = [1,2,3,4];

const multiple = nums.MyMap((item,i,arr)=>{
    return item * 3;
})

console.log(multiple)


Array.prototype.MyFilter = function(cb){
    let temp = [];
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this))
            temp.push(this[i])
    }
    return temp;
}

const greater = nums.MyFilter((item)=>{
    return item > 2;
})

console.log(greater)

Array.prototype.myReduce = function(cb,initialVal){
    let accumulator = initialVal;
    
    for(let i=0;i<this.length;i++){
        accumulator = accumulator ? cb(accumulator,this[i],i,this) : this[i];
    }
    return accumulator;
}

const sum = nums.myReduce((acc,item,i,arr)=>{
    return acc + item;
})

console.log(sum)
