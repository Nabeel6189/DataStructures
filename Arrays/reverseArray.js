let a = [13,12,23,44,32];

let arr = [];

for(let i = 0; i<a.length; i++){
    let length = a.length;
    let index = i+1;
    let arrIndex = Math.abs(length - index);
arr[i] = a[arrIndex];
console.log(arr[i]);
}

console.log(arr)
