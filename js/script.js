const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
      timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--; //decrement maxTime by -1
           return timeText.innerText = maxTime;
        }
        clearInterval(timer);
        alert (`Time Out! ${correctWord.toUpperCase()} was the correct word`)
        initGame(); // calling initGame function , so the game restarts
}, 1000);
}

const initGame = () =>{
    initTimer(31); //calling initTimer function with passing with 30 as maxTime value
    let randomObj = words[Math.floor(Math.random() *words.length)]; //Getting random objects from words
    let wordArray = randomObj.word.split(""); // splitting each letter of random words
    for (let i = wordArray.length-1; i > 0; i--){
        let j = Math.floor(Math.random() * (i+1)); //getting random numbers
        [wordArray[i],wordArray[j]] = [wordArray[j],wordArray[i]];  //shuffling and swiping wordArray letters randomly
    }
    wordText.innerText = wordArray.join(""); // passing shuffled words as a text
    hintText.innerText = randomObj.hint; // passing random object hint as hint text
    correctWord = randomObj.word.toLocaleLowerCase(); //passing random words to correctWord
    inputField.value="";// making input field empty
    inputField.setAttribute("maxlength",correctWord.length); //setting input maxleng  attr value to the word length
    console.log(randomObj);
}
initGame();
const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase(); // getting user value
    if(!userWord)return alert ("Please enter a word check"); // if user didn't enter any thing
    //if user word doesn't matches with the correct word
   if (userWord !== correctWord) return alert (`OOPS! ${userWord} is not correct word`); 
   //if above two if conditions are fail the show congrats alert because user word is correct
   alert (`Congrats! ${userWord.toUpperCase()} is a correct word`)
   initGame();
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);  