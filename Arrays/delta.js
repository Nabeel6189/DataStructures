let a = [10, 22, 45, 32, 43, 54];
let sum = 0;
for (let i=0; i<a.length-1; i++){
    sum += Math.abs(a[i] - a[i+1]);
    console.log(a[i], a[i+1], sum);
    
}
let delta = sum/(a.length-1);

console.log(delta);