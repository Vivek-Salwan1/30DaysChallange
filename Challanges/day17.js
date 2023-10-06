// day17 challenge - finding most frequent element in an array using hash table

function findMostFrequentElement(arr) {
    let frequencyTable = {};
    let maxFrequency = 0;
    let mostFrequentElement = null;

    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        frequencyTable[currentElement] = (frequencyTable[currentElement] || 0) + 1;

        if (frequencyTable[currentElement] > maxFrequency) {
            maxFrequency = frequencyTable[currentElement];
            mostFrequentElement = currentElement;
        }
    }

    return mostFrequentElement;
}

// Example usage:
const array = [1, 2, 3, 4, 2, 2, 3, 3, 3];
const mostFrequentElement = findMostFrequentElement(array);
console.log('The most frequent element in the array is:', mostFrequentElement); // Output: 3
