let bonus = 20;

function sum(first, second) {
    let result = first + second + bonus;
    if (result > 9) {
        const mood = 'Happy';
        console.log(mood);
    }
    return result;
}
const output = sum(3, 7);
console.log(output);