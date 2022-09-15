//Search an elemtn in the array
function searchElement(a, value) {

for (let i = 0; i<a.length; i++){
    if(a[i] === value) {
        return true        
    }

}
return false
}

// console.log(searchElement([23, 45, 76, 45, 67, 78]));
// console.log(searchElement([23, 45, 76, 46, 67, 78], 23));
// console.log(searchElement([23, 45, 76, 46, 67, 78], 45));

//Check if the array is sorted in ascending
function isSorted(a) {

    for (let i = 1; i<a.length; i++){
        let v1 = a[i];
        let v2 = a[i-1];
        if(v1 < v2) {
            console.log(v1);
            console.log('The elements are not in ascending');
             return false    
        }
        else if (v1 > v2){
            console.log(v1);
            console.log('The elements are not in descending')
            return false
        }
    
    }
    return true
    }
    console.log(isSorted([23, 45, 76, 44, 67, 78]));
    console.log(isSorted([8, 7, 6, 5]));
    console.log(isSorted([2, 4, 7, 8]));
    console.log(isSorted([1,1,1,1,1]));
    console.log(isSorted([1]));
    console.log(isSorted([]));


