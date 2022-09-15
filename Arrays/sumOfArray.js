function sumArray(a, sum){

let newArr = [];

for (let i=0; i<a.length; i++){
    for (let j = i+1; j<a.length; j++){
        if(a[i]+a[j] === sum);
        
    }
}
}

console.log(sumArray([0, 10, 30, 40, 20, 50],60));