// day10 challenge - Given an array containing N+1 intergers where the integers are in the range from 1 to N and there is exactly one duplicate element in the array write a javascript function to efficiantly find and return the duplicate element 

function findDuplicates(arr) {
    let duplicates = {};
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (duplicates[arr[i]] === undefined) {
            duplicates[arr[i]] = 1;
        } else {
            if (duplicates[arr[i]] === 1) {
                result.push(arr[i]);
            }
            duplicates[arr[i]]++;
        }
    }

    return result;
}

// Example usage:
const array = [1, 2, 3, 4, 2, 7, 8, 1, 3];
const duplicateElements = findDuplicates(array);
console.log("Duplicate elements in the array:", duplicateElements);
