// day24 challange - write a program to check the number is even or odd without using modulus operator in javascript

function isEvenWithoutModulus(num) {
    // Perform bitwise AND operation with 1
    // If the result is 0, the number is even; otherwise, it's odd
    return (num & 1) === 0;
}

// Example usage
const numberToCheck = 7; // Change this to any number you want to check

if (isEvenWithoutModulus(numberToCheck)) {
    console.log(`${numberToCheck} is even.`);
} else {
    console.log(`${numberToCheck} is odd.`);
}
