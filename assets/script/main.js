//Code: credit to Laurence Svekis, Udemy Course Javascript Fundamentals
//Declared Variables
 const container = document.querySelector(".container");
 const startGame = document.querySelector(".startGame");
 const cubeImg = document.querySelector(".cubeImg");
 const scoreArea = document.querySelector(".score");
 const heading = document.querySelector(".heading");
 const pText = document.querySelector(".pText");
 const userScore = document.querySelector(".userScore");
 const scoreText = document.querySelector(".scoreText");
 scoreText.style.display = "none";

 const FULL_DASH_ARRAY = 283;
 const WARNING_THRESHOLD = 10;
 const ALERT_THRESHOLD = 5;

 //Start button display and random delay before game start
 //Initiating timer
startGame.addEventListener("click", function() {
    startGame.style.display = "none";                   
    cubeImg.style.display = "none";
    app.style.display = "block";
    scoreText.style.display = "block";
    heading.style.display = "none"
    pText.style.display = "none";
    let ranTime = Math.random() * 2000 + 1000;
    setTimeout(makeItem, ranTime);
    startTimer();
});

//Create and styling target elements and randomly display on page in  random time intervals
function makeItem() {
    let boundary = container.getBoundingClientRect();
    console.log(boundary);

    let div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = Math.random() * boundary.width + "px";
    div.style.top = Math.random() * boundary.height + "px";
    div.style.width = Math.random() * 10 + 40 + "px";
    div.style.height = Math.random() * 10 + 40 + "px";
    div.style.borderRadius = "10%";
    div.style.cursor = "pointer";
    div.style.backgroundColor = "#"+Math.random().toString(16).substr(-6);
    div.style.border = "1px solid black";
    div.startTime = Date.now();

//Measure reactiontime and display on page as score
div.addEventListener("click", function() {
    let endTime = Date.now();
    let diff = (endTime - div.startTime)/1000;
    scoreArea.innerHTML = "Clicked in "+diff+" seconds!";

//Incrementing score and display as total score
currentScore = parseInt(document.querySelector(".scoreText").innerHTML);
    if (diff < 1){
        currentScore += 10;
    } else {
        currentScore += 5;
    } 
document.querySelector(".scoreText").innerHTML = currentScore;


    clearTimeout(div.timer);
    makeItem();
    container.removeChild(div);  
});

//Time interval to show and target elements
div.timer = setTimeout(function() {
    container.removeChild(div);
    makeItem();
}, 1400);

container.appendChild(div);
}

/*End Game - 'set the timeout globally and then clear the interval div.timer
 change to any global value and remove the interval'*/
setTimeout;

function endGame() {
    if(timeleft === 0)
    clearInterval(div.timer);
}

//When game time runs out
 function onTimesUp() {
    clearInterval(timerInterval);
    modal.classList.toggle("show-modal");
    document.querySelector(".userScore").innerHTML = ("Total score: ") + currentScore;
}

//Credit: Mateusz Rybczonec, CSS-Trick for colored animation
const COLOR_CODES = {
    info: {
        color: "green"
    },
    warning: {
        color: "yellow",
        threshold: WARNING_THRESHOLD
    },
    alert: {
        color: "red",
        threshold: ALERT_THRESHOLD
    }
}

//Credit: Css-Tricks Animated Countdown Timer
//Declared variables
const TIME_LIMIT = 20;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;
app.style.display = "none";

//Create timer
document.getElementById("app").innerHTML = `
    <div class="base-timer">
        <svg class="base-timer__svg" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g class="base-timer__circle">
                <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"/>
                <path id="base-timer-path-remaining" stroke-dasharray="283"
                    class="base-timer__path-remaining ${remainingPathColor}"
                    d="
                    M 50, 50
                    m -45, 0
                    a 45,45 0 1,0 90,0
                    a 45,45 0 1,0 -90,0 ">
                </path>
            </g>
        </svg>
        <span id="base-timer-label" class="base-timer__label">
            ${formatTime(timeLeft)}
        </span>
    </div>
`;

function startTimer() {
    timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
}, 1000);
}

//Timer text display
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
}

//Timer animation
function setRemainingPathColor(timeLeft) {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
        document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
    }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

// Credit: Sabe.io Modal Pop Up
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".closeButton");
const restartGameBtn = document.querySelector(".restartGameBtn");

//Show modal
function toggleModal () {
    modal.classList.toggle("show-modal");
}

//Hide modal
closeButton.addEventListener("click", toggleModal);
restartGameBtn.addEventListener("click", toggleModal);
   

