# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Chloe Chau**

Time spent: **15** hours spent in total

Link to project: (https://glitch.com/edit/#!/fluorescent-tide-smoke)

## Required Functionality

The following **required** functionality is complete:

* [Y] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [Y] "Start" button toggles between "Start" and "Stop" when clicked. 
* [Y] Game buttons each light up and play a sound when clicked. 
* [Y] Computer plays back sequence of clues including sound and visual cue for each button
* [Y] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [Y] User wins the game after guessing a complete pattern
* [Y] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [Y] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [Y] Buttons use a pitch (frequency) other than the ones in the tutorial
* [Y] More than 4 functional game buttons
* [Y] Playback speeds up on each turn
* [Y] Computer picks a different pattern each time the game is played
* [Y] Player only loses after 3 mistakes (instead of on the first mistake)
* [Y] Game button appearance change goes beyond color (e.g. add an image)
* [N] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [Y] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [Y] After a limited amount of time is passed, the Player loses a life

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

![] Winning Game: 
<img src = "http://g.recordit.co/COCLGFDMNH.gif"></img>

![] Losing Game: 
<img src = "http://g.recordit.co/7afKe0hJPa.gif"></img>

![] Start/Stop Button: 
<img src = "http://g.recordit.co/dnHv1LPk86.gif"></img>

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

I used https://www.w3schools.com to learn more about different functions (setInterval, clearInterval, etc.), 
HTML layout, and CSS keywords. I also used https://www.pixilart.com to create the pixel art that goes 
along with each button.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I had difficulty formatting the images on the buttons when they were clicked by the user. At first, when they were clicked,
it would cause the other buttons to move out of place.I had tried to change the margins and padding to 0px, but that didn't
work. In the end, I looked up different ways to "hide" elements on a page and used to the visibility keyword in place of 
the display keyword. After this, the button images showed up without creating issues for other buttons. Another challenge I 
encountered with creating this submission was with implementing the timer feature. While working with the timer, I had problems 
with starting and stopping it in the right places. At first, I would start the timer after a certain amount of time had passed (setTimeout)
and would stop it before it started. This resulted in it continuing to count down when it wasn't supposed to. To fix this, I 
experimented and in the end, chose to make a variable for the timeout and then clear it along with the timer.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

After completing this submission, I want to learn how to be able to store information. It would have
been great to be able to record high scores (for an infinite game mode) across multiple visits to the site.
I also want to learn more about how to create different elements of a website more efficiently. Even though
creating more buttons by copying and pasting the HTML and CSS was not difficult, it would tedious and messy to do 
that for a larger amount of buttons. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

I would spend the time allowing the player to have more freedom in choosing how to play the game. For example, I would want
to implement a feature where the player can decide how many buttons they want to play with, whether or not they want a timer, etc. 
I would also want to add a game mode where the player can continue to play forever until they mess up. To do this, I would need
to refactor the createPattern function to continue adding more beats as the game goes on rather than create a set amount at the start.
Going off of the infinite mode, I would want to be able to keep track of the highest score. 



## Interview Recording URL Link

[My 5-minute Interview Recording](https://drive.google.com/file/d/1lXJPTpzHJLSkWafYYuv5sp6lCRDwWjkN/view?usp=sharing)


## License

    Copyright Chloe Chau

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
