// day22 challange - write a program to check numeric string to int in javascript

function stringToInteger(str) {
    // Use parseInt() to convert the string to an integer
    // parseInt() returns NaN (Not a Number) if the string is not a valid number
    const num = parseInt(str);

    // Check if the result is NaN, indicating that the string is not a valid number
    if (isNaN(num)) {
        return "Invalid numeric string";
    } else {
        return num;
    }
}

// Example usage
const numericString = "42"; // Change this to any numeric string you want to convert

const result = stringToInteger(numericString);
console.log(result);
