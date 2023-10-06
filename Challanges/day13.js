// day13 challenge - print all possible permutations of the string
function generatePermutations(str) {
    if (str.length === 0) {
        return [''];
    }

    const char = str[0];
    const permutations = generatePermutations(str.slice(1));
    const result = [];

    for (let i = 0; i < permutations.length; i++) {
        const currentPermutation = permutations[i];
        for (let j = 0; j <= currentPermutation.length; j++) {
            const newPermutation = currentPermutation.slice(0, j) + char + currentPermutation.slice(j);
            result.push(newPermutation);
        }
    }

    return Array.from(new Set(result));
}

// Example usage:
const inputString = 'abc';
const permutations = generatePermutations(inputString);
console.log('All possible permutations:', permutations);
