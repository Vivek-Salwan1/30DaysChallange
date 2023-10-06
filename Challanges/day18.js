// day18 challenge - converting an integer to roman number

const integerRoman = [
    {'1': 'I', '2': 'II', '3': 'III', '4': 'IV', '5': 'V', '6': 'VI', '7': 'VII', '8': 'VIII', '9': 'IX', '10': 'X'}
];

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a number (1-10): ', (inputNumber) => {
    const romanNumeral = integerRoman[0][inputNumber];
    if (romanNumeral) {
        console.log(`The Roman numeral representation of ${inputNumber} is ${romanNumeral}`);
    } else {
        console.log('Invalid input. Please enter a number between 1 and 10.');
    }
    rl.close();
});
