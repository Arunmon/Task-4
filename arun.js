 
 A.  Print odd numbers in an array




// Anonymous Function
let printOddNumbers = function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

// IIFE
(function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})([1, 2, 3, 4, 5]);







b. Convert all the strings to title caps in a string array




// Anonymous Function
let convertToTitleCaps = function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};

// IIFE
let titleCapsArray = (function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
})(["hello", "world", "javascript"]);
console.log(titleCapsArray);








c. Sum of all numbers in an array



// Anonymous Function
let sumOfNumbers = function(arr) {
    return arr.reduce(function(sum, num) {
        return sum + num;
    }, 0);
};

// IIFE
let totalSum = (function(arr) {
    return arr.reduce(function(sum, num) {
        return sum + num;
    }, 0);
})([1, 2, 3, 4, 5]);
console.log(totalSum);
















