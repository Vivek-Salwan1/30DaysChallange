// day21 challange - write a program to check if a two string is a rotation of each other

function isRotation(str1, str2) {
    if (str1.length !== str2.length) {
        return false; // If the lengths are different, they can't be rotations
    }
    
    // Concatenate str1 with itself
    const concatenatedStr = str1 + str1;

    // Check if str2 is a substring of the concatenated string
    if (concatenatedStr.includes(str2)) {
        return true;
    } else {
        return false;
    }
}

// Example usage
const str1 = "waterbottle";
const str2 = "erbottlewat";

if (isRotation(str1, str2)) {
    console.log(`${str2} is a rotation of ${str1}`);
} else {
    console.log(`${str2} is not a rotation of ${str1}`);
}
