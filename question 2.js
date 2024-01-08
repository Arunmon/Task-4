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























