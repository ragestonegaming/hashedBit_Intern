function countWords(paragraph) {
   
    const words = paragraph.trim().split(/\s+/);
    
    return words.length;
}

const paragraph = "This is my internship work provided by my senior";
const wordCount = countWords(paragraph);

console.log(`Number of words: ${wordCount}`); 
