# Project-Tomagotchi


### Overview

For the first SEI Project, I am building a -**Tomagtochi Game !**

My Tomagotchi game is called Pixel Dogs and I made it to test my knowledge in HTML, CSS, and JavaScript.

I chose a default pet to be a dog


---
### Wireframe
![UserFlow](/Images/User_Flow.png)
![Start](/Images/Wireframe_TomagotchiStart.png)
![CharacterSelect](/Images/Wireframe_TomagotchiCharacterSelect.png)
![CharacterEdit](/Images/Wireframe_TomagotchiCharacterEdit.png)
![Game](/Images/Wireframe_TomagotchiGame.png)
![GameWin](/Images/Wireframe_TomagotchiGameWin.png)

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
6.  The pet will age every 5 years.
    <!-- * Morph your pet at certain ages. -->
7.  If the pets age or status's hit 10, the game is over.
    <!-- * You lose if your pet should die if Hunger, Boredom, or Sleepiness hits 10. -->
    <!-- * You win if age 10. -->

* **Highlights**
1. click buttons
```javascript
$('#feed').click(function(){
  if (hungerIndex < 10 && hungerIndex > 0){
    let hungerNum = document.getElementById(`hunger${hungerIndex}`)
    hungerNum.classList.remove('statusOn');
    hungerNum.classList.add('statusOff');
    hungerIndex-=1;
  }
});
```

2. status animation
```javascript
const statArr = [0,1,2,3,4,5,6,7,8,9]
function createHungerScale(){
  for (let a = 0; a < statArr.length; a++) {
      statArr[a] = document.createElement('div');
      statArr[a].id = "hunger" + a;
      statArr[a].classList.add("statusOff");
      $(".hungerStatus").append(statArr[a]);
  }
}
```

3. status animation
```javascript
let hungerIndex = 0
function hungerTimer() {
setInterval(function (){
  if (hungerIndex < 10){
    let hungerNum = document.getElementById(`hunger${hungerIndex}`)
      hungerNum.classList.remove('statusOff');
      hungerNum.classList.add('statusOn');
      hungerIndex+=1;
    } else {
    clearInterval(hungerIndex);
  }
},3000)
}
```

* **Next Steps**
1. There's a bit of repeating code, I think there should be a way to refractor it to be more clean.
2. There should be a lose screen when hunger,sleep, or boredom scale gets to 10.
3. There should be instructions on how to play the game.
4. Maybe the buttons would generate an effect to show the dog interacting with a ball or going to sleep when pressed.
5. Fix rename button to not repeat on click.

* **Image assets created by**
1. House exterior
<a href='https://www.freepik.com/free-photos-vectors/house'>House vector created by vectorpouch - www.freepik.com</a>

2. House interior
<a href='https://www.freepik.com/free-photos-vectors/design'>Design vector created by freepik - www.freepik.com</a>

3. Dog
<a href='https://www.freepik.com/free-photos-vectors/nature'>Nature vector created by stockgiu - www.freepik.com</a>
<br/>
Dog animation tutorial https://www.youtube.com/watch?v=gtl2ufc3_-c
<br/>
Dog 2 https://www.cgshospital.com/galleryvats-4-cgs-staff
