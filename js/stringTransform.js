function transformString(input) {
    const length = input.length;

    if (length % 15 === 0) {
        // If divisible by 15, reverse the string and then replace each character with its ASCII code
        let reversedString = input.split('').reverse().join('');
        return reversedString.split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        // If divisible by 3, reverse the string
        return input.split('').reverse().join('');
    } else if (length % 5 === 0) {
        // If divisible by 5, replace each character with its ASCII code
        return input.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
        // If none of the conditions are met, return the original string
        return input;
    }
}

// Example usage:
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
