 //Code credit to Udemy course Javascript Fundamentals by Laurence Svekis
 
 //Declared Variables
 const container = document.querySelector(".container");
 const startGame = document.querySelector(".startGame");
 const cubeImg = document.querySelector(".cubeImg");
 const scoreArea = document.querySelector(".score");
 let player = {
     score : 0
 };

 //Start button display and random delay before game start
startGame.addEventListener("click", function() {
    startGame.style.display = "none";
    cubeImg.style.display = "none";
    let ranTime = Math.random() * 2000 + 1000;
    setTimeout(makeItem, ranTime);
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
        //Incrementing score
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

    //Time interval for show and hide elements
    div.timer = setTimeout(function() {
        container.removeChild(div);
        makeItem();
    }, 1400);

    container.appendChild(div);

}