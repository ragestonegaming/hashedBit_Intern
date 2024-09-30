const readline = require('readline');

// Function to repeatedly calculate the sum of digits until the sum becomes a single digit
function repeatedSumOfDigits(num) {
    while (num >= 10) {
        num = num
            .toString()   // Convert the number to a string
            .split('')    // Split the string into individual characters (digits)
            .map(Number)  // Convert each character back to a number
            .reduce((sum, digit) => sum + digit, 0);  // Sum all digits
    }
    return num;
}

// Create readline interface to read input from the command line
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to handle user input and calculate the repeated sum of digits
rl.question('Enter a number: ', (input) => {
    const number = parseInt(input, 10); // Parse the input string as a base-10 integer

    if (!isNaN(number)) {
        const result = repeatedSumOfDigits(number);
        console.log(`The repeated sum of digits is: ${result}`);
    } else {
        console.log('Please enter a valid number.');
    }

    rl.close(); // Close the readline interface after getting the input
});
