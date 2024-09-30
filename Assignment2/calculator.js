function calculate(num1, num2, operation) {
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                return 'Error: Division by zero is not allowed.';
            }
            break;
        default:
            return 'Error: Invalid operation.';
    }

    return result;
}

// Taking input from the user
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const operation = prompt("Enter the operation (add, subtract, multiply, divide):").toLowerCase();

const output = calculate(num1, num2, operation);
console.log("Result:", output);
