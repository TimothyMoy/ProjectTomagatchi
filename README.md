# Project-Tomagotchi


### Overview

For the first SEI Project, I am building a -**Tomagtochi Game !**

My tomagotchi game is called Pixel Dogs and I made it to test my knowledge in HTML, CSS, and JavaScript.


---
### Wireframe
![UserFlow](/Images/User_Flow.png)
![Start](/Images/Wireframe_TomagotchiStart.png)
![CharacterSelect](/Images/Wireframe_TomagotchiCharacterSelect.png)
![CharacterEdit](/Images/Wireframe_TomagotchiCharacterEdit.png)
![Game](/Images/Wireframe_TomagotchiGame.png)
![GameWin](/Images/Wireframe_TomagotchiGameWin.png)
![GameLose](/Images/Wireframe_TomagotchiGameLose.png)


* **User Stories**
1.  The user begins the game by click/tapping start
    <!-- * Player starts at initial loading screen -->
    <!-- * initial screen should have title of game & start button-->
    <!-- * Create start button in center of container -->
    <!-- * Create title above the start button -->
2.  The user can then select a character
    <!-- * Create a modal for character selection -->
    <!-- * Create a user icon for character -->
    <!-- * Create a Class (JS Class, look at your notes if your forget) for your tomagotchi -->
    <!-- * When user select character, they see user icon, player name, player age, and next button -->
    <!-- * The character starts at age 1 -->
    <!-- * The character starts with a default random name -->
    <!-- * Add the ability to name your pet. -->
    <!-- * Next takes you to main Game. -->
3.  The level begins with the selected character
    <!-- * Create Header that display the following metrics for your pet:
      * Name
      * User Icon
      * Age
      * Hunger (1-10 scale)
      * Sleepiness (1-10 scale)
      * Boredom (1-10 scale) -->
    <!-- * Next takes you to main Game. -->
4.  The user can see their character in the center UI
    <!-- * Animate your pet across the screen while it's alive. -->
5.  The user can the interact with their pet by feeding, turning off lights, and playing.
    <!-- * Add buttons to the screen to feed your pet, turn off the lights, and play with your pet.
    * Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing. -->
    <!-- * Feed subtracts 1 from hunger scale. -->
    <!-- * lights subtracts 1 Sleepiness scale. -->
    <!-- * play subtracts 1 Boredom scale. -->
5.  The user's pet ages every 2 minutes
    <!-- * Increase your pet's age every 2 minutes -->
6.  The pet will age ever 5 years.
    <!-- * Morph your pet at certain ages. -->
6.  If the pets age or status's hit 10, the game is over.
    <!-- * You lose if your pet should die if Hunger, Boredom, or Sleepiness hits 10. -->
    <!-- * You win if age 10. -->



<!--
* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!
* **Use your Development Tools** (console.log, element inspector, alert statements, etc) to debug and solve problems
* During the day, work through problems in class & **ask questions when you need to!** We're here to help prevent you from burning through your time with wild goose chases. Add relevant code to your game each night too, instead of, you know... _procrastinating_.
* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version. There should be _at least_ a couple dozen commits.
* **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.
* **Plan to write code that you know you will have to remove later.** Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.
