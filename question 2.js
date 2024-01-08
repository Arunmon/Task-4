Do the below programs in arrow functions. 




a. Print odd numbers in an array



// Arrow Function
let printOddNumbers = arr => {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

// Usage
printOddNumbers([1, 2, 3, 4, 5])







b. Convert all the strings to title caps in a string array


// Arrow Function
let convertToTitleCaps = arr => {
    return arr.map(str => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};

// Usage
console.log(convertToTitleCaps(["hello", "world", "javascript"]));







c. Sum of all numbers in an array
 



// Arrow Function
let sumOfNumbers = arr => {
    return arr.reduce((sum, num) => sum + num, 0);
};

// Usage
console.log(sumOfNumbers([1, 2, 3, 4, 5]));





d. Return all the prime numbers in an array


// Arrow Function
let getPrimeNumbers = arr => {
    return arr.filter(num => {
        for (let i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    });
};

// Usage
console.log(getPrimeNumbers([2, 3, 4, 5, 6, 7, 8, 9, 10])





e Return all the palindromes in an array




// Arrow Function
let getPalindromes = arr => {
    return arr.filter(str => str === str.split('').reverse().join(''));
};

// Usage
console.log(getPalindromes(["level", "hello", "noon"])); 































