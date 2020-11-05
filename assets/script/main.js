 //Declared Variables
 const container = document.querySelector(".container");
 const startGame = document.querySelector(".startGame");
 const scoreArea = document.querySelector(".score");
 let player = {
     score : 0
 };

 //Start button display and random delay before game start
startGame.addEventListener("click", function() {
    startGame.style.display = "none";
    let ranTime = Math.random() * 2000 + 1000;
    setTimeout(makeItem, ranTime);
});