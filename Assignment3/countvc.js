let str = "This is my Internship .";
let vowels = "AEIOUaeiou";


let vowelCount = 0;
let consonantCount = 0;

for (let i = 0; i < str.length; i++) {
  let char = str[i];

  if (/[a-zA-Z]/.test(char)) {
   
    if (vowels.includes(char)) {
      vowelCount++;
    } else {
      consonantCount++;
    }
  }
}

console.log(`Vowels: ${vowelCount}`);      
console.log(`Consonants: ${consonantCount}`); 
