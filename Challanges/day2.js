// day2 challenge - swap two numbers without using 3rd variable

let x = 10;
let y = 5;
console.log(`value of x is ${x} and value of y is ${y}`)
x = x+y ;   /*10+5=15*/
y = x-y;   /*15-5=10*/     

x = x-y;   /*15-10=5*/ 
// now   y = 10  and x = 5
console.log(`Swapped values: x is now ${x} and y is ${y}`);
