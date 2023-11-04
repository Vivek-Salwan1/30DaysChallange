// day25 challange - write a program to find length of string without using len function

function findStringLength(inputString) {
    let count = 0;
    // Iterate through the characters of the string
    for (let char of inputString) {
        count++;
    }
    return count;
}

// Example usage
const str = "Hello, World!";
const length = findStringLength(str);
console.log("Length of the string:", length); // Output: 13
