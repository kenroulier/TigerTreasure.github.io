//Game constants and variables
const correctAns = new Audio('CorrectAnswer.mp3');
const wrongAns = new Audio('WrongAnswer.mp3');
const hint = new Audio('Hint.mp3');
const backgroundMusic = new Audio('BGMusic.mp3');
let speed=2;
let lastPaintTime=0;


//Game functions
//current time
function main(ctime){
    window.requestAnimationFrame(main);
    console.log(ctime)
    if((ctime-lastPaintTime)/1000 <1/speed){
        return;
    }
    lastPaintTime(ctime)
    gameEngine();
}
function gameEngine(){
    //Part 1: Updating the questions & options
    //Part 2: Rendering the questions & options

}







//Main logic starts here
window.requestAnimationFrame(main);
