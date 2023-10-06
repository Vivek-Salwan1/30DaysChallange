// day14 challenge - findig longest consigutive sequence
function longestConsecutive(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const numSet = {};
    for (const num of nums) {
        numSet[num] = true;
    }

    let longestStreak = 0;

    for (const num of nums) {
        if (!numSet[num - 1]) {
            let currentNum = num;
            let currentStreak = 1;

            while (numSet[currentNum + 1]) {
                currentNum += 1;
                currentStreak += 1;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}

// Example usage:
const nums = [100, 4, 200, 1, 3, 2];
const lengthOfLongestConsecutiveSequence = longestConsecutive(nums);
console.log('Length of the longest consecutive sequence:', lengthOfLongestConsecutiveSequence);
