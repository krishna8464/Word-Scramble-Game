document.getElementById("tectbox").focus();
const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");
let score = document.getElementById("score");
let scr = 0;
let wordlenght 

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
      timer = setInterval(() => {
        if (maxTime > 0) {
            maxTime--; //decrement maxTime by -1
           return timeText.innerText = maxTime;
        }
        clearInterval(timer);
        alert (`Time Out! ${correctWord.toUpperCase()} was the correct word`);
        scr=0
        score.innerText=`${0}`
        document.getElementById("tectbox").focus();
        initGame(); // calling initGame function , so the game restarts
}, 1000);
}

const initGame = () =>{
    document.getElementById("tectbox").focus();
    initTimer(31); //calling initTimer function with passing with 30 as maxTime value
    let randomObj = words[Math.floor(Math.random() *words.length)]; //Getting random objects from words
    let wordArray = randomObj.word.split(""); // splitting each letter of random words
    for (let i = wordArray.length-1; i > 0; i--){
        let j = Math.floor(Math.random() * (i+1)); //getting random numbers
        [wordArray[i],wordArray[j]] = [wordArray[j],wordArray[i]];  //shuffling and swiping wordArray letters randomly
    }
    wordText.innerText = wordArray.join(""); // passing shuffled words as a text
    console.log(wordArray.length);
    wordlenght=wordArray.length
    hintText.innerText = randomObj.hint; // passing random object hint as hint text
    correctWord = randomObj.word.toLocaleLowerCase(); //passing random words to correctWord
    inputField.value="";// making input field empty
    inputField.setAttribute("maxlength",correctWord.length); //setting input maxleng  attr value to the word length
    console.log(randomObj);
}
initGame();
const checkWord = () => {
    document.getElementById("tectbox").focus();
    let userWord = inputField.value.toLocaleLowerCase(); // getting user value
    if(!userWord)return alert ("Please enter a word check"); // if user didn't enter any thing
    //if user word doesn't matches with the correct word
   if (userWord !== correctWord) {
    scr=0
    score.innerText=`${0}`
    return alert (`OOPS! ${userWord} is not correct word`);
   } 
   //if above two if conditions are fail the show congrats alert because user word is correct
   scr++;
   
   alert (`Congrats! ${userWord.toUpperCase()} is a correct word`);
   score.innerText=`${scr}`
   initGame();
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);  


let inputbox = document.getElementById("tectbox");
console.log(inputbox.value)

document.addEventListener("keydown", function(event) {
    console.log(inputbox.value.length)
    if (inputbox.value.length === wordlenght && event.key === "Enter") {
        document.getElementById("btn1").click();
      }
    
});

