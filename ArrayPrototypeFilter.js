// Using Existing Array Prototype Method Filter
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result1 = nums.filter(num => num % 3 == 0);

console.log(result1); // Output: [3, 6, 9]

// Own Implementation of Filter Method
Array.prototype.myFilter = function(callback){
    const result = [];

    for(let i = 0; i < this.length;i++){
        if(callback(this[i],i,this)){
            result.push(this[i]);
        }
    }
    return result;
}

const resultnew = nums.myFilter(x => x % 5 == 0);
console.log(resultnew); // Output: [10]


// Filter the words that start with 'a'
const words = ['apple', 'banana', 'avocado', 'orange', 'apricot'];

const filteredWord = words.filter(x => x.startsWith('a'));;

console.log(filteredWord); // Output: ['apple', 'avocado', 'apricot']