const vowels = ["a","A","e","E","i","I","o","O","u","U"];
var pigLatinArray = [];

function vowelChecker(letterToBeChecked) {
  for (let i = 0; i < vowels.length; i +=1) {
   	if (letterToBeChecked===vowels[i]) {
        return true
    }
  }; 
};

function wordSplitter(inputTextj) {
  let inputWord= inputTextj.split("")
  let count=0;
  let done=0
 
  for (let k=0; k < inputWord.length; k+=1) {
    if(vowelChecker(inputWord[k])) {
      if (inputWord[k-1]==="q"||inputWord[k-1]==="Q") {
        count = count+1
      }
      pigLatinArray.push(inputTextj.substr(count)+inputTextj.substr(0,count)+"ay ");
      return pigLatinArray;
    }
    else {
      count +=1
    }
  } 
};

function pigLatinMaker() {
  let inputText = prompt("What do you want to say?").split(" ");
  for (let j = 0; j < inputText.length; j+=1) {
    if (vowelChecker(inputText[j].charAt(0))) {
      pigLatinArray.push(inputText[j].substr(1)+(inputText[j].charAt(0))+"way");
    }
    else {    
      wordSplitter(inputText[j]);
  	};
  };
  return pigLatinArray;
};

alert(pigLatinMaker())