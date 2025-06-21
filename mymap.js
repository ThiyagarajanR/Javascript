function MyMap(array, callback) 
{
    let result = [];
    let i = 0;
    array.forEach(element => {
        result[i] = callback(element);
        i++;
    });
    return result;
}

function double(n)
{
    return n * 2;
}

const resultArr = MyMap([1, 2, 3], double);

console.log(resultArr); // [2, 4, 6]

const triple = x => x * 3;
console.log(MyMap([2, 4, 6], triple)); // [6, 12, 18]

console.log(MyMap([1, 2, 3], x => `Value is ${x}`));
