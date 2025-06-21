// Using Array.prototype.reduce() to sum an array of numbers
const nums = [ 200, 300, 400, 500, 600, 700, 800, 900, 1000 ];

const result  = nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}
, 0);
console.log(result); // Output: 4500


// Own Implementation of ReduceMethod

Array.prototype.myReduce = function(callback, initailvalue) 
{
    let accumulator = initailvalue != undefined ? initailvalue: this[0];
    let startIndex = initailvalue != undefined ? 0 : 1;

    for(let i = startIndex; i < this.length; i++) 
    {
        accumulator = callback(accumulator, this[i], i, this);
    } 
    return accumulator;
}

const resultnew = nums.myReduce((acc, curr) => {
    return acc - curr;
}
);

console.log(resultnew); // Output: -4500

// Count the word ccurrences of each element in an array

const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const wordCount = words.myReduce((acc, word) => {
    if (acc[word]) {
        acc[word]++;
    } else {
        acc[word] = 1;
    }
    return acc;
}, {});
console.log(wordCount); // Output: { apple: 3, banana: 2, orange: 1 }

const frequency = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

console.log(frequency);

// Flattening a nested array using reduce

const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArray.reduce((acc,curr) => acc+curr,[]);
console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]

// my output is 1,23,45,6
