function sumOfProducts(n1, n2) {
    const str1 = n1.toString().split('').reverse();
    const str2 = n2.toString().split('').reverse();
    const maxLength = Math.max(str1.length, str2.length);
    let sum = 0;

    for (let i = 0; i < maxLength; i++) {
        const digit1 = parseInt(str1[i]) || 0; 
        const digit2 = parseInt(str2[i]) || 0; 
        sum += digit1 * digit2;
    }

    return sum;
}

function calculateSumOfProducts() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const result = sumOfProducts(num1, num2);
    document.getElementById("result").innerText = "Sum of Products: " + result;
}