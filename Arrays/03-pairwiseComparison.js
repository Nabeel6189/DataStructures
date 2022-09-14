const a = [70,83,42,55,55,64,89];
let first_delta = Math.abs(a[0] - a[1]);

let total_delta = 0;
for(let i=0; i<a.length-1; i++){
    value1 = a[i];
    value2 = a[i+1];
    let delta = Math.abs(value1-value2);
    console.log('delta of' , value1 , 'and',  value2 , 'is', delta);
    total_delta += delta;
};

let average_delta = total_delta/a.length;

console.log('total delta is :', total_delta);

console.log('Average delta is', average_delta);

let total_delta1 = 0;
for(let i=1; i<a.length; i++){
    value1 = a[i-1];
    value2 = a[i];
    let delta = Math.abs(value1-value2);
    console.log('delta of' , value1 , 'and',  value2 , 'is', delta);
    total_delta1 += delta;
};

let average_delta1 = total_delta/a.length;

console.log('total delta is :', total_delta1);

console.log('Average delta is', average_delta1);