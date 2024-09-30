function reverseString(str) {

    return str.split('').reverse().join('');
}


const input = "Hello";
const reversed = reverseString(input);

console.log(reversed); 
