function correctfn(string, wrong, correct) {
   
    return string.replace(wrong, correct);
  }
  
 
  let sentence = "I love my coutry.";
  let wrongWord = "coutry";
  let correctWord = "country";
  
  let correctedSentence = correctfn(sentence, wrongWord, correctWord);
  
  console.log(correctedSentence); 
  