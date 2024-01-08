





d. Return all the prime numbers in an array



// Anonymous Function
let getPrimeNumbers = function(arr) {
    return arr.filter(function(num) {
        for (let i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    });
};

// IIFE
let primeNumbersArray = (function(arr) {
    return arr.filter(function(num) {
        for (let i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    });
})([2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(primeNumbersArray);






e. Return all the palindromes in an array





// Anonymous Function
let getPalindromes = function(arr) {
    return arr.filter(function(str) {
        return str === str.split('').reverse().join('');
    });
};

// IIFE
let palindromeArray = (function(arr) {
    return arr.filter(function(str) {
        return str === str.split('').reverse().join('');
    });
})(["level", "hello", "noon"]);
console.log(palindromeArray);







f. Return median of two sorted arrays of the same size



// Anonymous Function
let medianOfArrays = function(arr1, arr2) {
    let combinedArray = arr1.concat(arr2).sort(function(a, b) {
        return a - b;
    });
    let middle = Math.floor(combinedArray.length / 2);
    if (combinedArray.length % 2 === 0) {
        return (combinedArray[middle - 1] + combinedArray[middle]) / 2;
    } else {
        return combinedArray[middle];
    }
};

// IIFE
let median = (function(arr1, arr2) {
    let combinedArray = arr1.concat(arr2).sort(function(a, b) {
        return a - b;
    });
    let middle = Math.floor(combinedArray.length / 2);
    if (combinedArray.length % 2 === 0) {
        return (combinedArray[middle - 1] + combinedArray[middle]) / 2;
    } else {
        return combinedArray[middle];
    }
})([1, 2, 3], [4, 5, 6]);
console.log(median);














