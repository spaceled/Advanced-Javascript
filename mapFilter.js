const numbers = [3, 4, 5, 6, 8];
const output = [];

for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}

// -------------One way------------
function square(element) {
    return element * element;
}

//  Map: can take 3 parameters

numbers.map(square)

const square = element => element * element;
const square = x => x * x;

// ------------ Easy Way-----------
const result = numbers.map(function(element){
    return element * element;
})
const result = numbers.map(x => x * x);
// console.log(output);
console.log(result);

//  Filter: To select something
const result2 = numbers.filter(x => x > 5);
console.log(result2);

// Find
const isThere = numbers.find(x => 5);
console.log(isThere);