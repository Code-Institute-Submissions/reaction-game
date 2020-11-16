![Image of four different screensizes](assets/images/mockup.png)

# Catch Me If You Can
Catch Me If You Can is a game to test the player's reaction time.  In a playful setting, the goal is for the player to 
click on as many items possible before the set timeframe of the game ends. The target items will show themselves randomly 
on the webpage, in position as well as within various time intervals. The score is based on the reaction time.

Follow this link to play the [game](link)

---
## Table of Contents
- [UX](#ux)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)
- [Acknowledgements](#acknowledgements)


---
## UX
I aim to present a game that is easy to understand and play for all ages. The game is presented on a mobile-friendly and 
easy to navigate web site. Accessible on all platforms to play the game on the go, or in the comforts of their home.

On entering the website the player shall directly understand how to play the game and the positive expected outcome by a 
welcoming text centered on the page. The headline is stating the purpose of the game and the centered start button, visually enforced by a stark 
 contrasting color, show how to engage with the game.

 While playing, the player can see the score increase as well as the reaction time between each "clicked" target. 
 My intention is that the player is given instant feedback on their performance to motivate interaction with the game.

 The game ends after 60 seconds and a pop-up box display the final score with the option to resume the game.

***Player 1***
 > *I am a new player and I want to spend some short offtime while playing a fun game to test my performance in some way. 
 I want to have some interaction with the game to feel motivated to keep playing. I want to feel challenged and have the 
 ability to improve my score.*

***Player 2***
 > *I am a frequent player and I want to improve my score and reaction-time. I compare my score with friends and family and share my results
 on my social pages.*

### Design 
I have chosen the typography Galindo because of its slight irregularity to give a sense of childish playfulness and gaming. The more 
contemporary typography Prompt is chosen to provide an easy to read and clear message to the player with a lighter font-weight.

![Color scheme](assets/images/color-scheme.png)

The color palette is based on the image of multicolored cubes on the landing site and used throughout the web site to be consistent with the theme.
The bright colors with stark contrast are used to enhance the visual hierarchy and guide the player on how to navigate on the web site.

The web site is kept minimalistic in its features to mediate a modern, timeless feeling and not to be perceived as cluttered.


[Wireframes](assets/resources/reaction-game_ms2.pdf)

---
## Features
The web application is designed to be mobile-friendly and responsive on all screen sizes.

### Existing Features
**Start Game Button** 
<br>Allows players to start interacting with the game. The button triggers the timer to initiate the 60 seconds countdown and 
the function to show target items on the page.<br>

**Target Items**
<br>Is randomly positioned on the page at various intervals. When clicked the score will increment by 10 
if the target items are clicked within 1 second, and by 5 if the item is clicked over 1 second. The player will be
able to follow the time difference between each clicked item which is updated at the bottom of the gameboard.<br>

**Timer**
<br>Closing to end of game time the timer visually enhances this by changing color to yellow followed by red.<br>

**Modal**
<br>A modal pop up when the game end and will show the player his or her total score. The player will at this time have two choices presented on two buttons: resume the game or go to the home page.

### Future Features
- Levels of difficulty by offering three sets of timeframes (beginner, intermediate, and advanced).
- Some target items of a certain color decrease the score when clicked. The player needs to be fast and attentive.
- A scoreboard for players to register their score and compare it with others on the web page.
- Links to social media to share your score with family and friends.

---
## Technologies Used

#### Languages
- HTML5
- CSS3
- Javascript
#### Other teqnologies
- [Basic Syntax Markdown Guide](https://www.markdownguide.org/basic-syntax/#unordered-lists)
- [Google Fonts](https://fonts.google.com/)
- [Adobe Color](https://color.adobe.com/sv/create/color-wheel)
- Grammarly Text editor
- [Balsamiq Wireframes](https://balsamiq.com/)
- [Tiny.png](https://tinypng.com/)
- [Pixabay](https://pixabay.com/)
- [Techsini Mockup Generator](http://techsini.com/)

---
## Testing
In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.
- [Techsini](http://techsini.com/) responsive test and mockup generator
- [Autoprefixer](https://autoprefixer.github.io/)
- [HTML Validator](https://validator.w3.org/)
- [CSS Validator](https://jigsaw.w3.org/css-validator/)
- [JsHint](https://jshint.com/)
- [Google Mobile Friendly](https://search.google.com/test/mobile-friendly) test
- [GTmetrix](https://gtmetrix.com/) To test speed and loading time
- [WebAim](https://webaim.org/resources/contrastchecker/) Contrast checker

### Known bugs
- Image on landing page is on some screen sizes causing an overflow.
- On some screen sizes the gameboard is overflowing, placing the target items halfway off the screen. This is due to incorrect sized 
container and 'get bounding client rectangle'.
- If a player never receives a score the console logs error "currentScore is not defined".

---
## Deployment

Following steps were taken to deploy my project to GitHub Pages:

- Logged in to GitHUb account and selected the repository to deploy.
- Locate the 'Settings' button in the meny bar above the repository and scroll down to 'GitHub Pages'.
- In the drop-down meny directly beneath 'Source', select 'master branch'. The page will refresh automatically.
- Locate the deployed link in the repositorys main 'GitHub Pages'section.

Following steps will be taken to fork the repository, to update or make changes to the repository:

- Login to my GitHub account and repository page.
- Locate the 'Fork' button in the top right corner of the page, above 'Settings'.
- Clicking the "Fork' button gives me a copy of the repository in my GitHub account.

Git Clone

The "clone" command downloads an existing Git repository to a local computer.
There are different options for cloning a repository, but this walkthrough will only cover the Url option, which is the most frequently used
option. You need to have downloaded and installed Git on to your computer. Make sure to allow Git to be used from the command line in the installation process.

- Create a folder for storing the repository locally.
- Open your web browser and enter the GitHub repository’s URL.
- Click on the button, “Code”, on right side of the screen, below the “Security” tab<br>

![To clone repo with HTTP](assets/images/clone_http.png)

- Open the Command Prompt (on Windows) or Terminal(on Mac).
- In the terminal, navigate to the location in which you would like to store the repo by typing the following command:

```$ cd <name of directory>``` 

- To clone the repo. Enter the following command:

```$ git clone <name of repo-url>```

- Make sure that the repository is in the dedicated folder on your computer. If so, then the repository was 
successfully cloned to your “Git local” folder.

For a full tutorial or to find other options to clone a repository than by Url, 
please visit this [Git Tutorial](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone).

---
## Credits
- [Udemy Javascript course](https://www.udemy.com/course/javascript-training/) by Laurence Svekis.
<br>*Modified for suitability with other features such as score counter and timer.*
- [CSS-Tricks Animated Countdown Timer](https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/)
- [SABE Modal Pop Up Box](https://sabe.io/tutorials/how-to-create-modal-popup-box)
<br>*Modified to be activated by timer instead of button.*
- Code Institute LMS
<br>*General source of information*
- Stack Overflow, W3School, Mozilla MDN
<br>*General source of information*
- Code Institute Slack Channel<br>
- [Atlassian Bitbucket](https://www.atlassian.com/git)
<br>*General source of information


### Content
The textual content is written by myself, Helena Plantin.
### Media
The images used in this project were obtained from [Pixabay](https://pixabay.com/).

---
## Acknowledgements
I received inspiration and based the foundation for this project while attending a 
[Udemy Javascript course](https://www.udemy.com/course/javascript-training/) by Laurence Svekis.
<br>I especially want to say thank you to Antonio Rodriguez, Mentor, for outstanding support. Also,
my partner in life, Patrick Svensson.