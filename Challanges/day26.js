// day26 challange - check if a given year is leap year without using % operator

function isLeapYear(year) {
    if (year / 4 === Math.floor(year / 4)) {
        if (year / 100 === Math.floor(year / 100)) {
            if (year / 400 === Math.floor(year / 400)) {
                return true; // Divisible by 400, it's a leap year
            } else {
                return false; // Divisible by 100 but not by 400, it's not a leap year
            }
        } else {
            return true; // Divisible by 4 but not by 100, it's a leap year
        }
    } else {
        return false; // Not divisible by 4, it's not a leap year
    }
}

// Example usage
const year = 2024;
if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}
