# Project-Tomagotchi


### Overview

For the first SEI Project, I am building a -**Tomagtochi Game !**

 **what the project is and why you made it,

<!-- Let's start out with something fun—**a game!**

Everyone will get a chance to **be creative**, and work through some really **tough programming challenges** – since you've already gotten your feet wet with a few small apps, it's up to you to come up with a fun and interesting game to build.

**You will be working individually for this project**, but we'll be guiding you along the process and helping as you go. Show us what you've got! -->


---
### Wireframe
![UserFlow](/Images/User_Flow.png)
![Start](/Images/Wireframe_TomagotchiStart.png)
![CharacterSelect](/Images/Wireframe_TomagotchiCharacterSelect.png)
![CharacterEdit](/Images/Wireframe_TomagotchiCharacterEdit.png)
![Game](/Images/Wireframe_TomagotchiGame.png)
![GameWin](/Images/Wireframe_TomagotchiGameWin.png)
![GameLose](/Images/Wireframe_TomagotchiGameLose.png)

### Technical Requirements

Your app must:
<!-- * **HAVE ITS OWN REPO, under your github account. NOT A FORK.** -->
* **Git 20+ commits** Commit early, commit often. Tell a story with your commits. Each message should give a clear idea what you changed.
<!-- * **Include Wireframes and User Stories in the README** -->

<!-- To do
1. create overview of Project -->
<!-- 2. create wireframe of design -->
<!-- 3. create user stories based on Specifications -->
<!-- 4. create components based on user Stories -->
<!-- 5. test and iterate
6. add in bonus features -->
<!-- * **Wireframe:** - Basically draw out what your game will look like—very different way it could look. You can use paper or any wireframe tool you find online. -->

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


* **Render a game in the browser**
<!-- * **Include separate HTML / CSS / JavaScript files** -->
<!-- * Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles -->
<!-- * Use **JavaScript or jQuery** for **DOM manipulation** -->
* **Deploy your game online**, where the rest of the world can access it (we will show you how)
<!-- * Use **semantic markup** for HTML and CSS (adhere to best practices) -->
<!-- * Be reasonably complex -->

---

### Necessary Deliverables

<!-- * A working MVP (minium viable product) what is the absolute bare minimum functionality for you game, do not make it more complex until you've completed your MVP. -->
* A **working game, built by you**, hosted somewhere on the internet
* A **link to your hosted working game** in the URL section of your Github repo
* A **git repository hosted on Github**, with a link to your hosted game, and frequent commits dating back to the very beginning of the project.
* **A ``README.md`` file** with an explanation of what the project is and why you made it, your user stories, explanations of the technologies used, the approach taken, installation instructions, unsolved problems, the other components previously indicated (if applicable).  In this project, also include your wireframes in the readme.

---

### Useful Resources

* **[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** _(a great reference for all things  Javascript)_
* **[jQuery Docs](http://api.jquery.com)** _(if you're using jQuery)_
* **[Github Pages](https://pages.github.com)** _(for hosting your game)_



<!-- ### Project Feedback + Evaluation

* __Project Workflow__: Did you complete the user stories, wireframes, task tracking, and/or ERDs, as specified above? Did you use source control as expected for the phase of the program you’re in (detailed above)?

* __Technical Requirements__: Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

* __Creativity__: Did you add a personal spin or creative element into your project submission? Did you deliver something of value to the end user?

* __Code Quality__: Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class?

* __Deployment__: Did you deploy your application to a public url using GitHub Pages?

* __Total__: Your instructors will give you a total score on your project between:

    Score | Expectations
    ----- | ------------
    **0** | _Incomplete._
    **1** | _Does not meet expectations._
    **2** | _Meets expectations, good job!_
    **3** | _Exceeds expectations, great job!_

This will serve as a helpful overall gauge of whether you met the project goals, but __the more important scores are the individual ones__ above, which can help you identify where to focus your efforts for the next project!

---

### Suggested Ways to Get Started -->
<!--
* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!
* **Use your Development Tools** (console.log, element inspector, alert statements, etc) to debug and solve problems
* During the day, work through problems in class & **ask questions when you need to!** We're here to help prevent you from burning through your time with wild goose chases. Add relevant code to your game each night too, instead of, you know... _procrastinating_.
* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version. There should be _at least_ a couple dozen commits.
* **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.
* **Plan to write code that you know you will have to remove later.** Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.

---

### Extras
* Have your tomagotchi give birth to baby tomagotchi...
* ...with special powers (extend the class)!
* Add an `excercise()` method to your tomagotchi, that affects certain properties
* Add anything you can think of... use your imagination! --> -->
