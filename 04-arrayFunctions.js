function sumDelta(a){
    let total_delta1 = 0;
for(let i=1; i<a.length; i++){
    value1 = a[i-1];
    value2 = a[i];
    let delta = Math.abs(value1-value2);
    console.log('delta of' , value1 , 'and',  value2 , 'is', delta);
    total_delta1 += delta;
}

let average_delta1 = total_delta1/a.length;

console.log('total delta is :', total_delta1);

console.log('Average delta is', average_delta1);

return average_delta1;
}

sumDelta([13,12,23,44,32]);