function MyMap(arr, callback) {
    const result = [];

    for( let i = 0; i < arr.length; i++) 
    {
        result.push(callback(i,arr[i],arr));
    }

    return result;
}

// Example

const res = MyMap([1,23,45], (index,val) =>{
    return index % 2 == 0 ? val * 2:val;
})


// Upper case

const upperCase  = MyMap(["thiyaga", " Rajan"], (index, val) => {
    return val.toUpperCase();
});
console.log(res); 
console.log(upperCase); // ["THIYAGA", " RAJAN"]

