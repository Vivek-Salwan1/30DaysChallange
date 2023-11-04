// day 23 challange - 

function customSplit(inputString, delimiter) {
    let result = [];
    let startIndex = 0;

    for (let i = 0; i < inputString.length; i++) {
        // If the current character is the delimiter or the last character of the input string
        if (inputString[i] === delimiter || i === inputString.length - 1) {
            // Extract the substring from startIndex to the current index
            let substring = inputString.substring(startIndex, i + 1);
            // Trim the substring to remove leading/trailing spaces
            substring = substring.trim();
            // Add the substring to the result array if it's not empty
            if (substring !== "") {
                result.push(substring);
            }
            // Update the startIndex to the next character
            startIndex = i + 1;
        }
    }

    return result;
}

// Example usage
const inputString = "Hello,World,Split,Example";
const delimiter = ",";

const outputArray = customSplit(inputString, delimiter);
console.log(outputArray); // Output: ["Hello", "World", "Split", "Example"]
